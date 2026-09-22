/* ============================================================
   Responsive layout tokens. Single source of truth.

   Mobile-first, three tiers (Tailwind v4 defaults):
     base  < 768px   phone     single column, compact spacing
     md:   ≥ 768px   tablet    2-up grids, inline nav
     lg:   ≥ 1024px  desktop   full design, max-w-[1200px]

   IMPORTANT: Tailwind v4's JIT only detects *static* class strings in
   source. A dynamic `grid-cols-${n}` is invisible to it and produces no
   CSS. These maps hold the full literal strings so every column count we
   support is generated. Add a new entry here before using a new count.
   ============================================================ */

export type ColCount = 1 | 2 | 3 | 4

/* base (mobile) column counts. Keep tiny; phones should rarely exceed 2 */
export const GRID_COLS_BASE: Record<ColCount, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
}

export const GRID_COLS_MD: Record<ColCount, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
}

export const GRID_COLS_LG: Record<ColCount, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}

/* Named gap scales. Responsive, so stacked content on mobile isn't
   crowded by the large desktop gaps. Literal strings stay JIT-safe. */
export type GapToken = 'none' | 'sm' | 'md' | 'lg' | 'steps' | 'arch' | 'portraits' | 'timeline'

export const GRID_GAP: Record<GapToken, string> = {
  none: 'gap-0',
  sm: 'gap-5',
  md: 'gap-6',
  lg: 'gap-10 lg:gap-20', // two-column intro/contact: tight when stacked, airy at desktop
  steps: 'gap-y-10 lg:gap-y-0', // method timeline: spaced when stacked, flush at desktop
  arch: 'gap-10 md:gap-[22px]', // services colonnade: roomy when stacked, snug arches at desktop
  portraits: 'gap-10 md:gap-8', // about portraits: 3-up at desktop
  timeline: 'gap-10 lg:gap-9', // method timeline nodes across the connecting line
}

/* Flex (Stack / Cluster) gaps. */
export type FlexGapToken = 'xs' | 'sm' | 'md' | 'lg'

export const FLEX_GAP: Record<FlexGapToken, string> = {
  xs: 'gap-2.5',
  sm: 'gap-3.5',
  md: 'gap-6',
  lg: 'gap-x-11 gap-y-4',
}

/* Section vertical rhythm: compact on phone, full at desktop. */
export const SECTION_PAD = 'py-16 md:py-24 lg:py-28'
