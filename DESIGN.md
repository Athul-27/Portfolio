# Portfolio — Design Specification

Personal portfolio for **Athul S — Associate Software Engineer**.

A modern, hireable developer portfolio with **pixel / Minecraft-flavored accents**
and a **comic / graphic-novel color treatment**: a clean editorial layout with
blocky, tactile detailing on top. Personality without gimmick.

---

## 1. Theme (current)

**Light "paper" comic base + pixel/Minecraft accents, Balanced boldness.**

### Color tokens
Defined in `tailwind.config.js` under `theme.extend.colors`:

| Token | Value | Use |
|---|---|---|
| `paper` | `#F4F1EA` | Page background |
| `surface` | `#FFFFFF` | Cards, buttons, panels |
| `ink` | `#15151A` | Text + all borders (the "comic ink") |
| `muted` | `#5B5B63` | Secondary text |
| `comic-red` | `#E23A3A` | Primary accent (CTAs, hero, highlights) |
| `comic-blue` | `#2F5BEA` | Secondary accent |
| `comic-yellow` | `#F5C518` | Tertiary accent / emphasis surfaces |
| `comic-green` | `#3FA14D` | Project accent |

### Comic styling rules
- Hard **2px ink borders** (`border-2 border-ink`) on every card, button, chip.
- Solid **offset shadow** instead of soft blur: `shadow-comic` = `4px 4px 0 0 ink`.
  - `shadow-comic-sm` = 3px, `shadow-comic-lg` = 6px.
- Flat fills, color used as a "spot color" highlight — **no big gradients**.
- **Halftone** and **pixel-grid** backgrounds at low opacity (see `.halftone`,
  `.pixel-grid` in `src/index.css`).
- Buttons "press" into their shadow on `:active` (`.comic-press`).
- Cards **lift** toward their shadow on hover (`.card-lift`).

### Typography
| Role | Font | Notes |
|---|---|---|
| Display / logo / indices | **Press Start 2P** | Decorative only — logo `ATHUL.`, `// 01` indices, kickers. Never body text. |
| Headings | **Bricolage Grotesque** | Bold, editorial energy. |
| Body | **Inter** | Legibility and accessibility. |

Loaded via Google Fonts in `index.html`.

### Signature motifs
- Floating isometric **pixel cube** in the Hero (`PixelCube.jsx`), bobbing with
  stepped easing for a stop-motion / 8-bit feel.
- Deterministic **pixel sprites** as project card art (`PixelPattern.jsx`).
- Inventory-style skill chips and blocky section index markers.

### Motion
Framer Motion, kept subtle:
- Scroll reveals: fade + ~16px rise, staggered lists (`Reveal.jsx`).
- Hero entrance, card hover lift, button press.
- Everything is gated by `useReducedMotion()` / `prefers-reduced-motion`.

---

## 2. Layout & sections
Single page, smooth-scroll anchors, sticky nav with active-section highlighting.

```
Navbar → Hero → About(01) → Skills(02) → Experience(03)
       → Projects(04) → Education(05) → Certifications(06) → Contact(07) → Footer
```

- **Hero**: name, designation badge, tagline, intro, CTAs (View Projects, Resume,
  GitHub, LinkedIn), pixel cube.
- **Experience**: vertical ink timeline with pixel nodes (Aikya work + stack).
- **Projects**: blocky cards with pixel sprite art, bullets, tech tags,
  placeholder Code links.
- All copy sourced only from the provided brief — **no invented facts**.

---

## 3. Accessibility
- Pixel font is decorative; real text stays in the DOM for screen readers.
- Ink-on-paper contrast comfortably exceeds WCAG AA.
- Visible focus ring on all interactive elements (`:focus-visible`).
- Skip-to-content link, semantic landmarks (`header`/`main`/`section`/`footer`),
  `aria-current` on active nav, keyboard-friendly controls.

---

## 4. Placeholders (swap-in later)
In `src/data/siteConfig.js`, set these to activate real links; while empty the
UI renders safe inert "soon" controls instead of broken links:
`links.github`, `links.linkedin`, `links.resume`.

Project repo/demo URLs live in `src/data/projects.js` (`repo`, `demo`).

To see how to switch the whole visual theme, see `THEMES.md`.
