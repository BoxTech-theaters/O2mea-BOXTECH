# BoxTech theater — static GitHub Pages site (root)

مرآة ثابتة لموقع **بوكس تيك** (كراسي ومسارح وملاعب وقاعات).

Static mirror of https://playground-grandstand.grok.me built for **root** hosting on the GitHub Pages organization site.

**Live:** https://boxtech-theaters.github.io/ (`/` → `/ar/`)

Repo: https://github.com/BoxTech-theaters/BoxTech-theaters.github.io

Previous sub-path mirror: https://theaterstage.github.io/BoxTech-seating/

## Contents

- Arabic (`/ar/…`) and English (`/en/…`) HTML routes from the source sitemap (~1226 pages), each as `…/index.html`
- `/assets/*` (JS/CSS), `/media/*` (product & project images), favicon, OG images, `.nojekyll`, `404.html`
- TanStack Router `basepath` set to `/` (root hosting)

## Gaps / known limits

- This is a **static** export: any live server APIs, quote/form backends, or WebSocket features from the original host will not run here.
- Google Fonts still load from `fonts.googleapis.com` (requires network).
- The original grok.app-builder extension script was removed from HTML.

## Fix notes (2026-10-05)

- Restored 20 missing Vite route chunks under `assets/` (products, systems, journal, news, …).
- Corrected Vite asset URL helper `Mv` so dynamic imports resolve correctly.
- Added `media/plates/*.svg` (~1600) referenced by journal/news/atlas pages.

## Source

- Origin: https://playground-grandstand.grok.me (`/` → `/ar`)
- Repo description: BoxTech seating / playground-grandstand static GitHub Pages mirror

## Root conversion (2026-10-11)

- Converted from theaterstage/BoxTech-seating@fe2c0fc: removed every `/BoxTech-seating` prefix in HTML/JS/CSS/manifest/404.html.
- Router basepath `/`, asset helper `Mv` returns `/`+e.
- `sitemap.xml` and `robots.txt` use absolute `https://boxtech-theaters.github.io/` URLs.
