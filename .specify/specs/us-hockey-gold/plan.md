# Implementation Plan: US Hockey Gold — Twin Triumph Celebration Site

> **Spec:** [spec.md](./spec.md)
> **Created:** 2026-02-25
> **Status:** Draft

---

## Summary

Build a single-page, static HTML/CSS/JS celebratory website showcasing USA Hockey's historic dual gold medals at the 2026 Milan-Cortina Olympics. The site uses a cinematic, immersive design with parallax scrolling, a media gallery, player roster cards, and an interactive tournament timeline. No build tools or frameworks — pure HTML for maximum demo speed.

---

## Constitution Check

- [ ] Simple static site — no over-engineering
- [ ] Opens from filesystem — no server dependency
- [ ] Fast to build and iterate on

---

## Technical Context

| Aspect | Choice | Rationale |
|--------|--------|-----------|
| Markup | HTML5 | No build step, instant demo |
| Styling | CSS3 (single file) | Custom properties for theming, no framework overhead |
| Interactivity | Vanilla JS | Smooth scroll, lightbox, timeline interactions |
| Images | Placeholder / Unsplash | No licensing issues for demo |
| Video | YouTube embeds or placeholder | External hosting, no file size bloat |
| Fonts | Google Fonts (Oswald + Inter) | Bold sport aesthetic + clean body text |
| Icons | Inline SVG or emoji | Zero dependencies |

---

## Architecture

```
demo/
├── index.html              <- Single-page site
├── css/
│   └── style.css           <- All styles (custom properties, responsive)
├── js/
│   └── main.js             <- Scroll effects, gallery, timeline interactions
├── img/
│   ├── hero-bg.jpg          <- Hero background (placeholder)
│   ├── players/             <- Player headshots (placeholders)
│   └── gallery/             <- Game photos (placeholders)
├── .specify/                <- Spec files (this directory)
└── README.md                <- (only if requested)
```

### Page Sections (scroll order)

1. **Hero** — Full-screen, cinematic background, headline, scroll CTA
2. **The Story** — Brief narrative of the historic dual gold
3. **Men's Team** — Highlights + roster cards
4. **Women's Team** — Highlights + roster cards
5. **Tournament Timeline** — Dual-track interactive path to gold
6. **Gallery** — Photo/video grid with lightbox
7. **Footer** — Share buttons, credits, USA Hockey branding

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--usa-red` | `#BF0A30` | Accents, CTAs |
| `--usa-blue` | `#002868` | Backgrounds, headers |
| `--usa-white` | `#FFFFFF` | Text on dark |
| `--gold` | `#FFD700` | Medal highlights, emphasis |
| `--gold-dark` | `#DAA520` | Gold gradients |
| `--bg-dark` | `#0A0A1A` | Page background |
| `--font-display` | `Oswald` | Headlines |
| `--font-body` | `Inter` | Body text |

---

## Implementation Phases

### Phase 1: Scaffold & Hero (US1)

| Task ID | Description | Files |
|---------|-------------|-------|
| T001 | Create HTML skeleton with section structure | `index.html` |
| T002 | Build CSS design system (custom properties, reset, typography) | `css/style.css` |
| T003 | Implement full-screen hero with background, headline, scroll CTA | `index.html`, `css/style.css` |
| T004 | Add smooth scroll navigation and parallax effect | `js/main.js` |

### Phase 2: Team Sections & Roster (US2, US3)

| Task ID | Description | Files |
|---------|-------------|-------|
| T005 | Build "The Story" narrative section | `index.html`, `css/style.css` |
| T006 | Create player roster card component (CSS grid) | `css/style.css` |
| T007 | Add men's team section with roster cards and highlight embeds | `index.html` |
| T008 | Add women's team section with roster cards and highlight embeds | `index.html` |

### Phase 3: Timeline & Gallery (US4, US2)

| Task ID | Description | Files |
|---------|-------------|-------|
| T009 | Build interactive dual-track tournament timeline | `index.html`, `css/style.css`, `js/main.js` |
| T010 | Create photo/video gallery grid with lightbox | `index.html`, `css/style.css`, `js/main.js` |
| T011 | Add team toggle filter to gallery | `js/main.js` |

### Phase 4: Polish & Social (US5, US1)

| Task ID | Description | Files |
|---------|-------------|-------|
| T012 | Add Open Graph meta tags and social share buttons | `index.html`, `js/main.js` |
| T013 | Mobile responsive pass and testing | `css/style.css` |
| T014 | Final visual polish — animations, transitions, gold accents | `css/style.css`, `js/main.js` |

---

## Risks

| Risk | Mitigation |
|------|------------|
| No real imagery available | Use high-quality placeholder images, AI-generated art, or Unsplash hockey photos |
| Olympic results not yet final | Use projected/realistic scores or mark as "demo data" |
| Parallax performance on mobile | Disable parallax on touch devices, use static backgrounds |
| Single HTML file gets unwieldy | Keep sections well-commented, extract CSS/JS to separate files |

---

*Based on [GitHub Spec Kit](https://github.com/github/spec-kit) (MIT License)*
