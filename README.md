# Athul S — Portfolio

A modern personal portfolio for **Athul S, Associate Software Engineer**.
Built with **React + Vite + Tailwind CSS + Framer Motion + Lucide icons**,
styled as a comic / graphic-novel theme with pixel accents.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  components/
    layout/    Navbar, Footer, Container
    ui/        Button, Tag, SectionHeading, Reveal, PixelCube, PixelPattern, SocialLink
    sections/  Hero, About, Skills, Experience, Projects, ProjectCard,
               Education, Certifications, Contact
  data/        siteConfig, skills, experience, projects, education, certifications
  lib/         useActiveSection
  App.jsx, main.jsx, index.css
```

Content is kept separate from UI in `src/data/` for easy editing.

## Add your real links
Edit `src/data/siteConfig.js`:

```js
links: {
  github:   'https://github.com/<you>',
  linkedin: 'https://linkedin.com/in/<you>',
  resume:   '/resume.pdf',   // put the file in public/
}
```

While these are empty the buttons render as safe "coming soon" controls — no
broken links. Add your `resume.pdf` to `public/` to enable the Resume button.
Project `repo`/`demo` URLs live in `src/data/projects.js`.

## Deploy to GitHub Pages
A ready workflow is at `.github/workflows/deploy.yml`.

1. Push this repo to GitHub.
2. In repo **Settings → Pages**, set **Source = GitHub Actions**.
3. Push to `main` — the workflow builds and publishes automatically.

`vite.config.js` uses `base: './'`, so it works on both
`<user>.github.io` and `<user>.github.io/<repo>`. `public/.nojekyll` is included.

## Docs
- `DESIGN.md` — full design specification.
- `THEMES.md` — how to swap the visual theme (plain / Minecraft / anime-comic).
