<!--
  Short, focused guidance to help AI coding agents be immediately productive
  in this repository. Keep this file concise (20-50 lines) and example-driven.
-->

# Copilot / AI Agent Instructions — Kikuyu Water Frontend

- **Quick summary:** React single-page app (Create React App / `react-scripts`) using Tailwind CSS for styling. The main UI is the landing page composed from small, focused components under `src/pages/landing-page` and `src/components`.

- **Dev commands:**
  - Install: `npm install` (avoid `npm install .`)
  - Start dev server: `npm start`
  - Run tests: `npm test`
  - Build for production: `npm run build`

  **Note:** Run these commands from the `kikuyu-water` package folder (e.g. `cd kikuyu-water`) — running them from the repository root will fail or run against a different package.

- **Where to look first:**
  - App entry: `src/index.js` and `src/App.js` (App currently renders `LandingPage`).
  - Landing page composition: `src/pages/landing-page/LandingPage.jsx` (imports Header, HeroSection, QuickActions, etc.).
  - Examples of component styling & layout: `src/pages/landing-page/Announcements.jsx`, `src/components/Footer.jsx`.

- **Styling conventions:**
  - Use Tailwind utility classes (configured in `tailwind.config.js`).
  - Design tokens: color names `primary`, `secondary`, `neutral` and font family `lato` are defined — prefer these instead of raw hex values. Example: `bg-primary/10 text-primary` (see Announcements tags).

- **Component patterns:**
  - Functional React components with default exports (keep consistent with existing files).
  - Page folders commonly include an `index.js` that re-exports the main component (see `src/pages/landing-page/index.js`).
  - Keep components small and presentational where possible; compose pages from these small pieces.

- **Assets & external content:**
  - Many current images are loaded from external GCS URLs (see `Announcements.jsx`). If adding images, prefer `src/assets/` or `public/` and reference them with relative paths.

- **APIs & integration points:**
  - README suggests a `src/services/api.js` for API calls, but no such file exists yet — centralize fetch/Axios logic there if adding backend integrations.
  - Backend is a REST API (see README). No auth middleware pattern is present in the frontend yet.

- **Tests & CI expectations:**
  - Tests use React Testing Library and jest via `react-scripts test`. Follow the simple pattern used in `src/App.test.js` for small unit/smoke tests.

- **Do not:**
  - Change Tailwind token names or global layout scales without coordinating — many components rely on these tokens. Avoid adding global CSS overrides that conflict with Tailwind utilities.

- **When in doubt:**
  - Preview locally (`npm start`) and follow existing component patterns (file layout, default export, tailwind classes). For design choices, match spacing and token usage demonstrated in `Announcements.jsx` and `Footer.jsx`.

Please review and tell me if you'd like more examples or to include PR/commit conventions.