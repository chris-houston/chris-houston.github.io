import assert from 'node:assert/strict';
import { readFile, readdir, access, stat } from 'node:fs/promises';
import { join, resolve, relative } from 'node:path';

const dist = resolve('dist');
const legacyRoutes = JSON.parse(await readFile('scripts/legacy-routes.json', 'utf8'));
const knownLegacyBrokenLinks = new Set([
  'gel-glide-privacy-policy.html:gel-glide-terms-of-service.html',
  'stack-em-privacy-policy.html:stack-em-terms-of-service.html',
]);
const failures = [];
const legacyWarnings = [];
let pages = 0;
let checkedLinks = 0;
async function exists(path) { try { await access(path); return true; } catch { return false; } }
async function walk(dir) {
  const output = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, item.name);
    output.push(...(item.isDirectory() ? await walk(path) : [path]));
  }
  return output;
}

for (const route of legacyRoutes) {
  assert(await exists(join(dist, route)), `Missing legacy URL: /${route}`);
  assert((await readFile(join(dist, route))).equals(await readFile(join('public', route))), `Legacy content changed: /${route}`);
}
assert(!(await exists(join(dist, 'resume'))), 'The retired résumé must not be published');
assert(!(await exists(join(dist, 'resume.html'))), 'The retired résumé must not be published');

const files = await walk(dist);
for (const file of files.filter(file => file.endsWith('.html'))) {
  pages++;
  const html = await readFile(file, 'utf8');
  const page = relative(dist, file);
  const legacy = legacyRoutes.includes(page);
  if (!legacy) {
    if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) failures.push(`${page}: expected one main heading`);
    if (!/<meta name="description" content="[^"]+"/.test(html)) failures.push(`${page}: missing description`);
    if (!/<link rel="canonical"/.test(html)) failures.push(`${page}: missing canonical URL`);
    if (/<(?:a|link)[^>]+href="[^"]*\/resume(?:\/|\.)/.test(html)) failures.push(`${page}: links to retired résumé`);
    for (const image of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt=/.test(image[0])) failures.push(`${page}: image without alt attribute`);
  }
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const raw = match[1].replaceAll('&amp;', '&');
    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(raw)) continue;
    const path = decodeURIComponent(raw.split(/[?#]/)[0]);
    if (!path) continue;
    let target = path.startsWith('/') ? resolve(dist, `.${path}`) : resolve(file, '..', path);
    if (!target.startsWith(`${dist}/`) && target !== dist) { failures.push(`${page}: path leaves the website: ${raw}`); continue; }
    if (await exists(target) && (await stat(target)).isDirectory()) target = join(target, 'index.html');
    checkedLinks++;
    if (!(await exists(target))) {
      const key = `${page}:${path}`;
      if (knownLegacyBrokenLinks.has(key)) legacyWarnings.push(key);
      else failures.push(`${page}: missing ${raw}`);
    }
  }
}
assert(await exists(join(dist, 'sitemap.xml')), 'Missing sitemap');
assert(await exists(join(dist, 'images/social-preview.png')), 'Missing social sharing image');
assert(await exists(join(dist, 'fonts/dm-sans-latin.woff2')), 'Missing self-hosted font');
for (const warning of legacyWarnings) console.warn(`Existing policy link needs owner-provided terms: ${warning}`);
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`Verified ${pages} pages, ${checkedLinks} local links, ${legacyRoutes.length} preserved legacy URLs, and removal of the résumé route. No new broken local links.`);
