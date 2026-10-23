# Chris Houston Apps

A public app showcase, built with Astro and published to GitHub Pages. Daily Llama leads the collection; the site contains no résumé, employment history, or download-count claims.

## Local development

Use Node 24 LTS (minimum supported version: 22.23.4).

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. Before publishing:

```sh
npm run build
npm run check
npm run verify
npm run preview
```

## Content and design

- `src/data/apps.ts` holds the app names, descriptions, categories, icon paths, store URLs, and policy links.
- `src/pages/index.astro` is the homepage, with an interactive app showcase and category directory.
- `src/components/AppPlayground.astro` presents all 13 apps as a spatial icon picker. Daily Llama is selected initially. Selecting an icon updates the real artwork, app description, and store links. Arrow/Home/End keys and previous/next buttons also browse the collection. All 13 icons pop into place in a staggered, spring-like sequence when the homepage opens, then float around the enlarged selected icon. The entrance and ongoing motion use separate elements so hovering and app selection remain responsive. Ambient movement and pointer depth respect reduced-motion preferences, and offscreen animation pauses automatically. There is no visible pause control. Without JavaScript, the icons link directly to app pages.
- `src/components/Brand.astro` defines the text-only Houston Apps wordmark.
- `src/components/StoreLinks.astro` uses the existing App Store badge and a complete Google Play download badge, with their original artwork and proportions.
- `src/components/ScreenshotGallery.astro` renders every app’s full preview set in a static grid on its detail page. All images are visible without tabs, clicking, or JavaScript; images retain their original proportions. `app-detail.css` styles the app header, download panel, features, and support links.
- `src/components/SelectedAppGallery.astro` shows the selected app’s previews in a swipeable strip, with an accessible image viewer and keyboard navigation. Changing apps brings the cards in with a short, staggered fade and lift. Entrances wait until the screenshots enter the viewport, cancel cleanly when selecting another app, and respect reduced-motion settings.
- `src/data/app-previews.ts` holds 40 official previews across all 13 apps; `docs/app-preview-sources.json` records their store sources.
- `src/pages/apps/` contains the collection and generated app pages. The collection uses `CollectionCard.astro` and `collection.css` for an artwork-led storefront, with a larger Daily Llama feature, Idle Hobo near the top, category counts, platform filters, and shareable filter URLs. Icons and screenshot artwork are spaced apart, with no overlapping images. Every app appears once; without JavaScript, the full collection and all app links remain available.
- `src/pages/support.astro` provides app-specific email links and a policy directory. It does not submit forms or collect information on the site.
- `src/styles/global.css` defines shared styles; `src/styles/playground.css` defines the responsive homepage scene.
- `src/components/AppRating.astro` contains Daily Llama’s US App Store rating snapshot. Recheck the rating and count before updating the copy and verification date.
- `public/` contains static files. Everything in this directory is publicly served.
- `docs/asset-sources.json` records the official screenshot sources and copy verification notes.

Screenshots are official App Store and Google Play promotional previews, optimized to WebP. Artwork uses the original app icons and store previews, with the complete screenshots shown on every detail page. It does not simulate app functionality or live item-shop data. Fonts are self-hosted; their OFL licenses are in `public/fonts/`.

## GitHub Pages launch

This is the root website repository, `chris-houston/chris-houston.github.io`, not the separate `apps` repository. The public URL remains `https://chris-houston.github.io/`.

The site now requires a build. At launch, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` builds and verifies pull requests; pushes to `master` also deploy the verified `dist/` artifact. Branch names in that workflow intentionally match this repository’s existing `master` branch.

The approved redesign is published from `master`. Keep the previous commit available for rollback; restoring the old buildless site also requires restoring its prior Pages publishing source. The older `chris-houston/apps` project must have Pages disabled because its `/apps/` mount otherwise overrides this site’s collection and detail pages. Its legal and advertising URLs are preserved here before retiring that duplicate deployment. The separate `chris-houston/daily-llama` project remains published to preserve its original landing page. Its missing `/daily-llama/privacy-policy.html` file was restored there using the identical policy also kept in this repository.

## Compatibility

All 26 existing root policy, credits, and advertising URLs are retained in `public/`. Their content is unchanged except that Gel Glide and Stack Em no longer reference nonexistent terms documents, following the owner’s confirmation that separate terms are optional. Their privacy and data-handling statements remain unchanged. A further 20 URLs from the older `chris-houston/apps` project are preserved under `public/apps/`, along with the two images used by those legal pages. These were copied unchanged from its `main` snapshot `fba858b` during launch, so installed apps can continue using their `/apps/` policy addresses. The collection at `/apps/` and the app detail pages are generated by Astro; no old homepage is copied over them. Homework Pal is retired from the app listings, support picker, and sharing artwork; its existing privacy-policy URL remains available for installed copies. The old `/resume/` route is deliberately removed and returns the site’s 404 page after deployment. The résumé is not included in the static output or linked from the site. A deployed 404 does not immediately remove historical search-engine entries or copies in Git history.

Terms links appear only for apps with existing terms documents. All listed apps have a privacy-policy link except legacy Grade Pal, whose policy link is intentionally omitted at the owner’s request; the app remains listed and supported. Apps without legal documents are omitted from the policy directory. The verifier rejects every missing local link; there are no exceptions for broken legal links.

## Checks

After each deployment, `npm run verify:live` checks all app pages and fetches all 46 legacy URLs from the public server, comparing their content byte-for-byte with the current policy files. It retries during CDN propagation and fails the deployment check if another Pages project overrides a route. The same command can be run locally when auditing production.

The static verifier requires a privacy policy for each listed app except the approved Grade Pal exception, and requires every declared legal URL to be included in the protected live checks. It also checks preserved URLs and exact policy content, retirement of the résumé, local page and asset links, metadata, image alternatives, social artwork, sitemap, and font files. Browser checks additionally cover all 13 app selections, the matching screenshot galleries, image enlargement and dismissal, category deep links, the full app-page screenshot grids, combined category/platform filters, app-specific support links, mobile layouts, and keyboard navigation. Reduced-motion rules are also checked in source; browser emulation was unavailable.
