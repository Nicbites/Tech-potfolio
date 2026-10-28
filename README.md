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
- `src/pages/index.astro`: featured work, experience, about, and contact copy.
- `src/styles/global.css`: colors, layout, responsive behavior, and print styles.

The sheet is a saved content snapshot, not a live API integration. The KP Forms entry also incorporates Nico’s clarification that his DILG contributions include workflows and monitoring backend development. To refresh, review the sheet and update the matching entries in `portfolio.json`; keep each `id` stable so project deep links continue to work. No Google credentials or runtime Google access are needed. Original repositories and proof folders retain their existing access settings.

The featured project artwork is a concept illustration made with CSS, not a screenshot of the applications. All project descriptions are grounded in the supplied sheet. Email contact opens the visitor’s email app; the copy button uses the browser clipboard when available.

Category filters and multiword search can be combined. Featured project links open the matching contribution, including when it is hidden by a filter. Without JavaScript, all project details remain available as native expandable entries.
