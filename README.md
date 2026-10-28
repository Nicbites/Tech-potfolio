# Nico Rivera — Portfolio

A responsive Astro portfolio for a BSIT graduate open to opportunities, with a navy-and-gold visual theme, a light theme, and a searchable project index.

## Run locally

Requires Node.js 20 or later and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Astro (normally http://localhost:4321).

```sh
npm run build   # Astro type checking and production build
npm run preview # Serve the production build
```

## Update the content

- `src/data/profile.ts`: name, contact details, degree, availability, and school. Employment dates are omitted because they have not been confirmed.
- `src/data/portfolio.json`: the 15 development projects and digital-operations experience imported from the supplied Google Sheet on October 28, 2026. Includes contribution descriptions, outcomes, technologies, and original proof links.
- `dilgReferences` in that JSON stores Nico’s three Facebook project references (two posts and a photo), displayed on the featured DILG card and in its expanded contribution details. Post titles and dates are omitted because Facebook did not expose their content during review.
- `src/pages/index.astro`: featured work, experience, about, and contact copy.
- `src/styles/global.css`: colors, layout, responsive behavior, and print styles.

The sheet is a saved content snapshot, not a live API integration. The KP Forms entry also incorporates Nico’s clarification that his DILG contributions include workflows and monitoring backend development. To refresh, review the sheet and update the matching entries in `portfolio.json`; keep each `id` stable so project deep links continue to work. No Google credentials or runtime Google access are needed. Original repositories and proof folders retain their existing access settings.

The DILG featured card uses a supplied demonstration photo, with eight photos available in its expanded project gallery. `src/data/dilgGallery.ts` defines image order, alt text, and captions for the originals in `src/gallery/`. Astro generates optimized WebP images, and each thumbnail links to the full-size original. The Husay Barangay Innovation Tracker announcement is labeled separately. The other featured project visuals are CSS concept illustrations. Project descriptions are grounded in the supplied sheet and Nico’s clarifications. Email contact opens the visitor’s email app; the copy button uses the browser clipboard when available.

Category filters and multiword search can be combined. Featured project links open the matching contribution, including when it is hidden by a filter. Without JavaScript, all project details remain available as native expandable entries.

## Netlify deployment and search visibility

`netlify.toml` pins Node.js 22 and pnpm 10.30.3, runs `pnpm run build`, and publishes `dist`. The committed `pnpm-lock.yaml` keeps dependencies reproducible. Sharp is an explicit dependency so Astro’s generated image service can resolve it under pnpm. `pnpm-workspace.yaml` explicitly allows the `sharp` and `esbuild` setup scripts: pnpm 10 otherwise skips them, leaving Astro unable to optimize the gallery photos. For a clean CI-style install, use `pnpm install --frozen-lockfile`.

The canonical production address is `https://nicorivera.netlify.app/`. Override `SITE_URL` in the build environment if the production domain changes. The homepage includes the names Nico Rivera, Nico N. Rivera, nicorivera, and NICO RIVERA in its visible identity or ProfilePage/Person structured data, plus canonical and social metadata. `/sitemap.xml` and `/robots.txt` are generated from the same production URL. Netlify deploy previews and branch deploys receive `noindex, nofollow` metadata and disallow crawling; publish the production site to make these changes available for indexing.

After production deployment, verify the site in Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml`, and request indexing of the homepage. Verification must be completed through the site owner’s accounts; no ownership tokens are stored in this repository. Crawl permission and structured data support discovery but do not guarantee indexing, ranking, or immediate visibility in any search engine.
