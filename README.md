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

## Redigere innhold

Alle seksjoner har egne JSON-filer i `src/content/`. `.pages.yml` beskriver feltene
for det eksisterende Pages CMS-oppsettet. Tekster, bilder, alternativ bildetekst,
menyetiketter, kundehistorier og kontaktinformasjon kan endres der uten å endre React-koden.
Bilder lastes opp til `public/media/`. Endringer vises etter neste bygg/deploy.

- **Toppseksjon:** Overskrift, ingress, begge knapper, bilde og bildetekst.
- **Tjenester:** Legg til eller endre kort, bilder og utvidede beskrivelser.
- **Om oss / Bransjer / Slik jobber vi:** Rediger tekster, bilde, bransjeliste og steg.
- **Kundehistorier:** Erstatt de tydelig merkede plassholderne med godkjent innhold.
- **Nettsted og kontaktinfo:** E-post for møtebooking, valgfri telefon, adresse,
  organisasjonsnummer og LinkedIn-adresse. Tomme kontaktfelt skjules.
- **Avsluttende kontaktseksjon:** Rediger knapp, emne og forhåndsutfylt e-post.
- **Bunntekst:** Rediger lenketekster og innholdet i de juridiske dialogene.

Møtebooking åpner brukerens e-postprogram. Siden har ingen backend for innsending
eller kalenderbooking. E-postadressen er videreført fra prosjektets eksisterende innhold.
Bekreft den før publisering, og legg inn godkjent personverntekst og LinkedIn-profil.
Det er ingen innlastingsanimasjon, analyseverktøy eller eksterne fontkall.

### Midlertidige fotografier

Fotografiene er lokale kopier fra Unsplash, og forestiller ikke nødvendigvis Nordic
Revisjons egne lokaler eller medarbeidere. Bytt dem gjerne med egne godkjente bilder.

| Lokal fil | Kilde på images.unsplash.com |
| --- | --- |
| `office-hero.jpg` | `photo-1497366754035-f200968a6e72` |
| `office-meeting.jpg` | `photo-1497366811353-6870744d04b2` |
| `collaboration.jpg` | `photo-1516321318423-f06f85e504b3` |
| `writing.jpg` | `photo-1455390582262-044cdead277a` |
| `mountains.jpg` | `photo-1464822759023-fed622ff2c3b` |

### Visuell kontroll

Siden er kontrollert i Chromium ved 1440, 768, 390 og 320 px bredde. Mobilmeny,
Escape/fokus, utvidelse av tjenester, juridiske dialoger og møteknappen er kontrollert.
Kjør `bun run build` og `bun run lint` etter endringer.
