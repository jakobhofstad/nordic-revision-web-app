# Nordic Revisjon landing page

Single-page marketing site for **Nordic Revisjon**, a Norwegian audit firm. The content is in Norwegian.

Built with React 19, TypeScript, Vite 8, and Tailwind CSS v4.

## Getting started

This project uses [Bun](https://bun.sh) as the package manager.

```bash
bun install
bun run dev      # start the Vite dev server with HMR
```

## Scripts

| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `bun run dev`     | Start the Vite dev server with hot module replacement.   |
| `bun run build`   | Type-check (`tsc -b`) and build the production `dist/`.  |
| `bun run preview` | Serve the built `dist/` locally.                         |
| `bun run lint`    | Run ESLint over the project.                             |

## Project structure

- `src/App.tsx` composes the page sections and owns shared scroll state.
- `src/sections/` holds one file per full-width page section (Header, Hero, Intro, Services, Method, About, Contact, Footer).
- `src/components/` holds small reusable presentational components.
- `src/theme/sections.ts` holds shared section anchor ids and the page container class.
- `src/index.css` holds the Tailwind v4 setup and brand design tokens (`@theme`).
- `public/` holds static assets (`fonts/`, `logos/`).

## Styling

Tailwind CSS v4 is configured CSS-first, so there is **no `tailwind.config.js`**. All brand
tokens (colors, fonts, shadows) are declared in the `@theme` block of `src/index.css` and used
as utility classes. Add new tokens there rather than hardcoding values.

Brand: Indigo `#312783`, warm grey `#F3F3F2`, the custom **Volte** typeface, and JetBrains Mono
for eyebrow/label text.
