import type { ReactNode } from 'react'
import { GRID_COLS_BASE, GRID_COLS_LG, GRID_COLS_MD, GRID_GAP } from '../../theme/breakpoints'
import type { ColCount, GapToken } from '../../theme/breakpoints'

/* ============================================================
   Grid: responsive multi-column layout.

   Always emits a mobile base column count, then scales up at md/lg. This
   is the ONLY sanctioned way to build a multi-column layout. Raw
   `grid-cols-*` in section markup is blocked by the responsive-layout
   ESLint rule. Column counts resolve through the literal class maps in
   theme/breakpoints.ts so Tailwind's JIT can see them.
   ============================================================ */

export function Grid({
  cols,
  gap = 'md',
  className = '',
  children,
}: {
  cols: { base?: ColCount; md?: ColCount; lg?: ColCount }
  gap?: GapToken
  className?: string
  children: ReactNode
}) {
  const base = GRID_COLS_BASE[cols.base ?? 1]
  const md = cols.md ? GRID_COLS_MD[cols.md] : ''
  const lg = cols.lg ? GRID_COLS_LG[cols.lg] : ''
  return <div className={`grid ${base} ${md} ${lg} ${GRID_GAP[gap]} ${className}`.trim()}>{children}</div>
}
