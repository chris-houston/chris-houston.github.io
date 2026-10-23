# App showcase redesign

## Scope

Create a polished public product showcase under Chris Houston’s name. Lead with Daily Llama. Keep app users’ needs central: understand the product, view real screens, download the app, and get support. Exclude the résumé, career history, recruiter-specific pages, and all download counts.

Daily Llama’s approved proof point is “4.7 on the App Store · 4,000+ ratings,” backed by the US Apple storefront snapshot on October 22, 2026. Do not attribute these ratings to all apps or to Google Play.

## Design

A clean, text-only Houston Apps wordmark, deep navy surfaces, ice-blue type, and a warm coral accent. Start directly with the featured app instead of a generic opening slogan. Keep the animated app scene on an open, flat backdrop, with no sphere or orbital rings. Use the existing App Store badge and a full Google Play download badge, preserving the artwork and aspect ratios. All 13 icons act as a preview picker around the featured artwork. Daily Llama opens first with its enlarged icon and approved rating; each selection changes the enlarged icon, description, download destinations, and the preview gallery below within one continuous dark-blue showcase. All 13 icons stay visible and keep their gentle floating movement. Provide previous/next app selection, keyboard support, reduced-motion support, and a direct-link fallback without JavaScript. The gallery uses real store previews for every app, frames that match each image’s proportions, native horizontal browsing, and an expandable image viewer. Do not place Daily Llama screenshots in the floating icon scene or show a pause button. Keep supporting text at least 14px. Follow the scene with a contrasting light category directory, a brief introduction, and support. Avoid serif type, tiny labels, download claims, and a duplicate Fortnite toolkit section.

## Implementation

1. Build reusable Astro layouts and components with custom CSS and TypeScript.
2. Organize all 13 apps in one typed content collection and retain existing store destinations. Give the apps directory an artwork-led storefront: a larger Daily Llama card, Idle Hobo next, and a varied grid using real app icons and store previews, with clear spacing and no overlapping artwork. Keep each app listed once, with readable copy, responsive layouts, category counts, and category/platform filters reflected in the URL.
3. Add an accessible category/platform app browser, one page per app, and a support/policy directory.
4. Add controlled device entrance, app-icon movement, and pointer depth. Respect reduced-motion settings, pause offscreen animation, and keep navigation usable without JavaScript.
5. Serve optimized official screenshots and licensed fonts locally.
6. Preserve every existing policy, credits, and advertising URL. Remove the résumé from output.
7. Give all 13 app detail pages a shared, color-themed layout with app identity, store badges, support links, and a complete static screenshot grid directly below the header. Show every screenshot without selector tabs or click-to-view steps.
8. Validate the production build and local links. Test desktop, mobile, filters, gallery, support subjects, keyboard use, and reduced motion in a browser.
9. Review the complete local result and development branch. At launch, switch GitHub Pages to Actions and deploy the verified build from `master`.

## Content follow-up

The older Android-only app descriptions were checked against their official Google Play listings. Confirm future changes in product availability directly with the owner or official store. Obtain actual terms documents for the two pre-existing missing legal destinations rather than drafting them as part of a visual redesign.
