import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';
import { apps } from '../src/data/apps.ts';

// Check the public server as well as the build: another project Pages site can
// override a directory even when the correct files exist in our artifact.
const site = new URL(process.env.SITE_URL || 'https://chris-houston.github.io/');
const legacyRoutes = JSON.parse(await readFile(new URL('./legacy-routes.json', import.meta.url), 'utf8'));
const routes = new Map(await Promise.all(legacyRoutes.map(async route => [
  route, { original: await readFile(new URL(`../public/${route}`, import.meta.url)) },
])));
for (const path of ['', 'apps/', 'support/', ...apps.map(app => `apps/${app.slug}/`)]) {
  routes.set(path, { canonical: new URL(path, site).href });
}
const total = routes.size;
const release = process.env.GITHUB_SHA || Date.now().toString();
let failures = [];
for (let attempt = 1; attempt <= 5 && routes.size; attempt++) {
  failures = [];
  const pending = [...routes];
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(4, pending.length) }, async () => {
    while (cursor < pending.length) {
      const [path, expected] = pending[cursor++];
      try {
        const url = new URL(path, site);
        url.searchParams.set('release', release);
        const response = await fetch(url, { headers: { 'Cache-Control': 'no-cache' }, signal: AbortSignal.timeout(15000) });
        assert.equal(response.status, 200, `HTTP ${response.status}`);
        const body = Buffer.from(await response.arrayBuffer());
        if (expected.original) assert(body.equals(expected.original), 'original content differs');
        else {
          const html = body.toString('utf8');
          assert(html.includes(`<link rel="canonical" href="${expected.canonical}"`), 'expected page is being overridden or has the wrong canonical URL');
        }
        routes.delete(path);
      } catch (error) {
        failures.push(`/${path}: ${error.message}`);
      }
    }
  }));
  if (routes.size && attempt < 5) {
    console.warn(`Waiting for ${routes.size} published routes to update (attempt ${attempt}/5).`);
    await delay(12000);
  }
}
if (routes.size) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified ${total} live routes, including ${legacyRoutes.length} byte-identical legacy policy, credits, and advertising URLs.`);
}
