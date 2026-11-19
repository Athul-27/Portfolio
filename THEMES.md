# Theme Swap Guide

The site is built so restyling is **token + decorative changes**, not a rebuild.
Content (`src/data/`) and layout components are decoupled from styling.

The two levers:
1. **Color + shadow + font tokens** → `tailwind.config.js`
2. **A small component layer** → `src/index.css` (`.halftone`, `.pixel-grid`,
   `.comic-press`, `.card-lift`)

> To change the whole look, edit `tailwind.config.js` colors/shadows/fonts,
> adjust the decorative classes in `index.css`, and optionally swap the
> decorative components (`PixelCube.jsx`, `PixelPattern.jsx`). Layout/sections
> and all content stay untouched.

---

## A. Current — Comic / graphic-novel + pixel accents
- Base: paper `#F4F1EA`, white surfaces, ink borders, 2px borders, hard offset shadows.
- Fonts: Press Start 2P (display) / Bricolage Grotesque (headings) / Inter (body).
- Decor: pixel cube, pixel sprites, halftone, pixel grid.

## B. Plain professional (minimal risk)
- Colors: near-black `#0A0A0B` bg, `#121214` surfaces, off-white text, one indigo
  accent (`#6D7CFF`). Remove the `comic-*` spot colors.
- Shadows: replace hard offset shadows with soft ones
  (e.g. `0 1px 2px rgba(0,0,0,.2)`) and use rounded corners.
- Fonts: drop Press Start 2P; use a single sans (Inter) or add a serif for headings.
- Decor: remove pixel cube/sprites or keep a very subtle gradient.

## C. Full Minecraft
- Palette: all-green/earth — grass `#3FA14D`, dirt `#7A5230`, stone `#8A8A8A`, sky `#5B8BFF`.
- Borders: keep hard; add blocky "brick" textures via CSS background images or a
  repeating pixel tile in `index.css`.
- Fonts: Press Start 2P across most headings (used sparingly for legibility).
- Components: inventory-slot grid for skills; replace cube with multiple blocks.
- Replace `.pixel-grid` with a denser pixel tile.

## D. Anime / comic (graphic novel)
- Base: off-white paper; **bold ink outlines** (thicker, e.g. 3px).
- Add: halftone **panels**, speed-line gradients, **speech-bubble** tagline in Hero.
- Fonts: a punchier display (e.g. Archivo Black / a comic display face).
- Accents: bold primary red/blue/yellow (already close to current comic palette).
- Keep Inter for body. Structure identical.

---

## Quick "how to"
1. Update `theme.extend.colors`, `boxShadow`, `fontFamily` in `tailwind.config.js`.
2. Update the decorative helper classes in `src/index.css` to match.
3. Swap or simplify decorative components under `src/components/ui/`
   (`PixelCube`, `PixelPattern`) and any `halftone`/`pixel-grid` usages.
4. `npm run build` to confirm nothing broke.

No changes needed in `src/data/` or the section layouts.
