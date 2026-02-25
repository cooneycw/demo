# Tasks: US Hockey Gold — Twin Triumph Celebration Site

> **Plan:** [plan.md](./plan.md)
> **Created:** 2026-02-25
> **Status:** Draft

---

## Task Format

`[ID] [P?] [Story] Description`

- **ID**: T001, T002, etc.
- **[P]**: Parallelizable task
- **[Story]**: US1, US2, etc.

---

## Wave 1: Scaffold & Hero

- [ ] **T001** [US1] Create HTML skeleton with all section anchors and nav `index.html`
- [ ] **T002** [P] [US1] Build CSS design system — custom properties, reset, typography, color tokens `css/style.css`
- [ ] **T003** [US1] Implement full-screen hero — cinematic bg, "Twin Gold. Total Dominance." headline, scroll CTA `index.html` `css/style.css` (depends on T001, T002)
- [ ] **T004** [US1] Add smooth scroll nav and parallax scroll effects `js/main.js` (depends on T001)

**Checkpoint:** Hero section loads with immersive visual, smooth scroll works

---

## Wave 2: Team Content & Rosters

- [ ] **T005** [US1] Build "The Story" narrative section — dual gold context `index.html` `css/style.css`
- [ ] **T006** [P] [US3] Create player roster card CSS component — grid layout, hover effects `css/style.css`
- [ ] **T007** [US2][US3] Add Men's Team section — roster cards, highlight video embeds `index.html` (depends on T006)
- [ ] **T008** [US2][US3] Add Women's Team section — roster cards, highlight video embeds `index.html` (depends on T006)

**Checkpoint:** Both teams displayed with roster cards and media placeholders

---

## Wave 3: Timeline & Gallery

- [ ] **T009** [US4] Build interactive dual-track tournament timeline — group stage through gold `index.html` `css/style.css` `js/main.js`
- [ ] **T010** [P] [US2] Create photo/video gallery grid with lightbox overlay `index.html` `css/style.css` `js/main.js`
- [ ] **T011** [US2] Add team toggle filter to gallery `js/main.js` (depends on T010)

**Checkpoint:** Timeline shows both paths to gold, gallery works with team filter

---

## Wave 4: Polish & Launch

- [ ] **T012** [P] [US5] Add Open Graph meta tags and social share buttons `index.html` `js/main.js`
- [ ] **T013** [US1] Mobile responsive testing and fixes `css/style.css`
- [ ] **T014** [US1] Final visual polish — entrance animations, gold particle effects, transitions `css/style.css` `js/main.js`

**Checkpoint:** Site is demo-ready, responsive, and shareable

---

## Issue Sync

Use `/spec:sync us-hockey-gold` to create GitHub issues.

| Wave | Tasks | Issue | Status |
|------|-------|-------|--------|
| Wave 1 | T001-T004 | - | pending |
| Wave 2 | T005-T008 | - | pending |
| Wave 3 | T009-T011 | - | pending |
| Wave 4 | T012-T014 | - | pending |

---

*Based on [GitHub Spec Kit](https://github.com/github/spec-kit) (MIT License)*
