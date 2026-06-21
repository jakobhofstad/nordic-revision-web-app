import type { ReactNode } from 'react'

/* ============================================================
   Decor: full-bleed layer for decorative background art.

   Renders behind section content, is hidden below md, and clips its
   overflow. Off-canvas art (negative offsets, oversized SVGs) therefore
   never causes horizontal scroll on phones. Children are positioned
   absolutely relative to this layer, which covers the section bounds.

   Pair with breakpoint-prefixed sizes on the art itself, e.g.
   `md:w-[720px]`, so a bare oversized width never reaches mobile (and the
   responsive-layout ESLint rule stays satisfied).
   ============================================================ */

export function Decor({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      {children}
    </div>
  )
}
