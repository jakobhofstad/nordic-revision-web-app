import type { ReactNode } from 'react'
import { FLEX_GAP } from '../../theme/breakpoints'
import type { FlexGapToken } from '../../theme/breakpoints'

/* ============================================================
   Stack: vertical flex column with a consistent gap.
   Replaces ad-hoc `flex flex-col gap-*`. Always stacks, so it is
   mobile-safe by construction.
   ============================================================ */

export function Stack({
  gap = 'sm',
  className = '',
  children,
}: {
  gap?: FlexGapToken
  className?: string
  children: ReactNode
}) {
  return <div className={`flex flex-col ${FLEX_GAP[gap]} ${className}`.trim()}>{children}</div>
}
