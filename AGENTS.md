# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Overview

**Servicios Chachin** — a marketing and SaaS-style site for a Guatemalan
consulting firm offering strategic consulting, advisory with follow-up,
and technical services (web, systems, billing, etc.).

- **Stack:** Vanilla HTML, CSS, and JavaScript (no build step, no framework).
- **Hosting:** Cloudflare Pages (see `_redirects`, `wrangler.js`).
- **Language:** All user-facing copy is in **Spanish (es-GT)**. Keep it that way
  unless explicitly told otherwise.
- **Design system:** Defined in `MASTER.md` — treat it as the source of truth
  for colors, typography, spacing, shadows, and component styles.

## Repository Layout

| Path | Purpose |
|------|---------|
| `index.html` | Landing / one-page site (hero, plataforma, soluciones, etc.). |
| `consultoria.html`, `asesoria.html`, `servicios.html`, `demos.html`, `desarrollador-google.html`, `preguntas-frecuentes.html`, `resenas.html` | Detail pages linked from the navbar. |
| `styles.css` | Global styles (versioned via `?v=` query string in `<link>` tags). |
| `saas.css` | SaaS dashboard / platform-specific styles. |
| `script.js` | Main site script: scroll reveal, mobile nav, animations, network background canvas. |
| `saas-dashboard.js` | Logic for the SaaS dashboard section. |
| `reviews.js`, `reviews-api.js` | Customer reviews rendering and API client. |
| `ai.js`, `phyton.js`, `Mecanografiado.js`, `trabajador,js` | Demo / experimental scripts referenced from demo pages. |
| `wrangler.js` | Notes / commands for Cloudflare Vectorize setup (not an actual config file). |
| `_redirects` | Cloudflare Pages redirects. |
| `logo.png`, `*.jpeg`, `*.png` | Static image assets. |
| `MASTER.md` | **Design system spec.** Read before touching any UI. |
| `README.md` | Currently a single-line placeholder. |

## Critical Rules

### Design System (from `MASTER.md`)

Always honor the tokens and component specs in `MASTER.md`. Quick reminders:

- **Palette:** Primary `#1E3A8A`, Secondary `#1E40AF`, CTA `#B45309`,
  Background `#F8FAFC`, Text `#0F172A`. Use the corresponding
  `--color-*` CSS variables.
- **Fonts:** `Lexend` for headings, `Source Sans 3` for body.
- **Spacing / shadows:** Use the `--space-*` and `--shadow-*` tokens; do not
  hardcode magic numbers when a token exists.
- **Style mood:** Trust & Authority — corporate, trustworthy, clean.

### Forbidden patterns (from `MASTER.md`)

- No emojis as icons — use SVG icons (Phosphor is already loaded, Heroicons or
  Lucide are also acceptable).
- No AI purple/pink gradients.
- No generic content; reflect the consulting firm's voice and credentials.
- No clickable element without `cursor: pointer`.
- No layout-shifting hovers (avoid `scale` that pushes neighbors).
- No instant state changes — use transitions of 150–300ms.
- Maintain at least 4.5:1 text contrast.
- Visible focus states for keyboard navigation; respect `prefers-reduced-motion`.

### Pre-delivery checklist

Before considering UI work done, verify each item in the
"Pre-Delivery Checklist" section at the bottom of `MASTER.md`
(no emoji icons, consistent icon set, hover/focus states, responsive at
375 / 768 / 1024 / 1440 px, no horizontal scroll on mobile, etc.).

## Conventions

### HTML

- All pages start with `<!DOCTYPE html>` and `<html lang="es">`.
- Include the standard meta block: `charset`, `viewport`, `theme-color`,
  `description`, Open Graph tags, and Twitter card.
- Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`, then load the
  Lexend + Source Sans 3 stylesheet.
- Phosphor Icons is loaded via
  `<script src="https://unpkg.com/@phosphor-icons/web" defer></script>`.
- Reuse the existing floating navbar markup (`.floating-nav.floating-nav--site`)
  across pages so the mobile nav script keeps working.
- Provide a skip link (`<a class="skip-link" href="#contenido-principal">`) for
  accessibility.

### CSS

- Edit `styles.css` for site-wide styles and `saas.css` for SaaS/dashboard
  scope. Do not introduce new global stylesheets without good reason.
- When you change a stylesheet that is cache-busted via `?v=`, **bump the
  version number** in every `<link>` tag that references it (e.g. `styles.css?v=50` → `?v=51`).
- Prefer CSS variables defined alongside the design tokens; add new tokens to
  the `:root` block instead of duplicating values.

### JavaScript

- Plain ES5/ES2015-friendly browser JS, no bundler. Don't introduce `import`/`export`
  syntax or Node-only APIs in files that are loaded directly by the browser.
- Keep scripts idempotent and guard against missing DOM nodes
  (`if (!nav || !toggle) return;`) — pages share scripts.
- Use `defer` on `<script>` tags so DOM is ready before execution.

### Content & copy

- Spanish, Guatemala variant. Tone: professional, accessible, trustworthy.
- Keep claims grounded in real services (consultoría, asesoría, desarrollo,
  facturación). Avoid generic filler.

## Workflow for Agents

1. **Read `MASTER.md` first** if the change is visual or component-level.
2. **Search before adding files.** Prefer editing the existing HTML/CSS/JS
   over creating new files.
3. **No build step.** You can preview by opening `index.html` directly or
   serving the folder with any static server (e.g. `python3 -m http.server`).
4. **Cloudflare Pages.** Routing/redirects live in `_redirects`. New SPA-like
   redirects should be added there, not invented elsewhere.
5. **Cache busting.** Remember to bump the `?v=` query when editing
   `styles.css` or `saas.css` so visitors don't get stale CSS.
6. **Accessibility & responsiveness** are not optional — they are part of
   "done" per the checklist in `MASTER.md`.

## What This Repo Is *Not*

- Not a Node/React/Vue project. There is no `package.json`, no build tooling,
  no test runner. Don't add one unless explicitly requested.
- `wrangler.js` is **not** a Wrangler config file — it's a notes file with a
  single CLI command for creating a Vectorize index. The real Cloudflare
  Pages deploy is wired up outside this repo.
