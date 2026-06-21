/* Anchor ids shared by the nav, footer links and section elements. */
export const SECTIONS = {
  tjenester: 'tjenester',
  metode: 'metode',
  omOss: 'om-oss',
  kontakt: 'kontakt',
} as const

/* Reusable centered page container. Full-width down to mobile with
   responsive horizontal padding folded in, so a section can never forget
   its gutters. Used inside the <Section> primitive; prefer that over
   reaching for this constant directly. */
export const CONTAINER = 'mx-auto w-full max-w-[1200px] px-5 md:px-8'
