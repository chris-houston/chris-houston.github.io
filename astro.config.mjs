import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chris-houston.github.io',
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
});
