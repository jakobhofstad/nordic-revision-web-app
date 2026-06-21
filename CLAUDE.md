# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Writing style

Do not use em dashes in any files, comments, commit messages, or responses. Rewrite sentences to flow without them, using periods, commas, parentheses, or colons instead.

## Project

Single-page marketing landing page for **Nordic Revisjon**, a Norwegian audit firm. Content is in Norwegian. Built with React 19 + TypeScript + Vite 8 and Tailwind CSS v4.

## Commands

This project uses **Bun** as the package manager (`bun.lock`).

- `bun install` installs dependencies
- `bun run dev` starts the Vite dev server with HMR
- `bun run build` type-checks (`tsc -b`) then produces a production build in `dist/`
- `bun run lint` runs ESLint over the repo
- `bun run preview` serves the built `dist/` locally

There is no test suite.

## Architecture

The page is a flat composition of full-width sections. [src/App.tsx](src/App.tsx) renders the sections in order (`Header → Hero → Intro → Services → Method → About → Contact → Footer`) and owns the only shared client state:

- `scrolled`: a scroll listener toggles this past 24px, and the `Header` restyles itself (transparent over the hero, white once scrolled) based on it.
- `go(id)` / `goTop()`: smooth-scroll helpers passed down as props. `go` offsets by ~76px to clear the fixed header. These are threaded into `Header`, `Hero`, and `Footer`. There is no router or state library.

Code is split into two layers:
- [src/sections/](src/sections/) holds one file per page section. Sections own their copy/content and layout.
- [src/components/](src/components/) holds small reusable presentational pieces (`ServiceCard`, `MethodStep`, `TeamCard`, `NavButton`, `Eyebrow`, `Field`, `ContactRow`, `icons`).

[src/theme/sections.ts](src/theme/sections.ts) holds the shared `SECTIONS` anchor-id constants (used by both nav links and section elements, so keep these in sync when adding sections) and the `CONTAINER` class string for the centered max-width page wrapper.

## Styling

Tailwind v4 is configured CSS-first, so there is **no `tailwind.config.js`**. All design tokens are declared in the `@theme` block of [src/index.css](src/index.css) and consumed as utility classes (e.g. `bg-warm-grey`, `text-ink-soft`, `text-indigo`, `font-mono`). When introducing a new brand color, spacing, or shadow, add it to `@theme` rather than hardcoding values.

Brand: Indigo `#312783`, warm grey `#F3F3F2`, the custom **Volte** typeface (loaded via `@font-face` from `/public/fonts/`), and JetBrains Mono for eyebrow/label text. Icon SVGs are inline and use the indigo stroke directly. Some dynamic styles (header color transitions in `Header.tsx`) are applied via inline `style` rather than utility classes because they interpolate between states.

Static assets (`fonts/`, `logos/`) live in `public/` and are referenced by absolute path (e.g. `/logos/wordmark-white.svg`).

## Layout and responsiveness

The site is **mobile-first** across three tiers (Tailwind defaults): `base` under 768px (phone), `md:` at or above 768px (tablet), `lg:` at or above 1024px (desktop, the full design).

**Compose the layout primitives in [src/components/layout/](src/components/layout/). Do not hand-roll responsive layout.** This is what keeps mobile from breaking, and the custom ESLint rule `nrdic/responsive-layout` enforces it.

| Need | Use | Not |
| --- | --- | --- |
| A page section (bg, container, gutters, vertical rhythm) | `<Section tone id borderTop decor>` | raw `<section>` plus `CONTAINER` plus `px`/`py` |
| Multi-column content | `<Grid cols={{ base, md, lg }} gap>` | raw `grid grid-cols-*` |
| Vertical list with gap | `<Stack gap>` | `flex flex-col gap-*` |
| Wrapping row (buttons, nav, footer) | `<Cluster gap>` | bare `flex` that can overflow |
| Background art | `<Decor>` plus a breakpoint-prefixed size | absolutely positioned `<img>` with a bare `w-[..px]` |

What the linter blocks, and the reasoning:

- **No bare multi-column grids.** `grid-cols-3` on its own applies on phones. Go through `<Grid>`, which always emits a `grid-cols-1` base. If you write classes directly, keep a base and add a breakpoint: `grid-cols-1 md:grid-cols-3`.
- **No large bare fixed widths.** `w-[720px]` overflows a phone. Decorative art goes in `<Decor>` (hidden below `md`) with a prefixed size such as `md:w-[720px]`. A `max-w-[..]` ceiling is fine.
- **No raw `max-w-[1200px]` page container.** It lives once in [src/theme/sections.ts](src/theme/sections.ts) and is applied by `<Section>`.

Column counts, gaps, and section padding are literal class maps in [src/theme/breakpoints.ts](src/theme/breakpoints.ts). **Add an entry there before using a new value.** Tailwind v4's JIT only sees static class strings, so a computed `grid-cols-${n}` produces no CSS. The maps keep every supported value in the build.

Typography is already fluid via `clamp()` and needs no breakpoints. The header collapses to a hamburger plus drawer below `lg` ([src/sections/Header.tsx](src/sections/Header.tsx) plus [src/sections/MobileNav.tsx](src/sections/MobileNav.tsx)).

Exempt from the rule: [src/components/layout/](src/components/layout/) and [src/theme/](src/theme/), which hold the sanctioned literal maps everything else routes through.

Adding a new section is the whole pattern:

```tsx
import { Grid, Section } from '../components/layout'

export function Example() {
  return (
    <Section id="example" tone="white" borderTop>
      <Grid cols={{ base: 1, md: 2, lg: 3 }} gap="md">
        {/* cards */}
      </Grid>
    </Section>
  )
}
```

That is responsive on phone, tablet, and desktop with zero breakpoint knowledge.
