import type { ReactNode } from 'react'
import { FLEX_GAP } from '../../theme/breakpoints'
import type { FlexGapToken } from '../../theme/breakpoints'

/* ============================================================
   Cluster: horizontal flex row that wraps.

   For button rows, nav, footer columns, credential strips. Wrapping is
   built in, so the row degrades to multiple lines on narrow screens
   instead of overflowing. Mobile-safe by construction.
   ============================================================ */

export function Cluster({
  gap = 'sm',
  align = 'center',
  justify,
  className = '',
  children,
}: {
  gap?: FlexGapToken
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'between'
  className?: string
  children: ReactNode
}) {
  const alignClass = { start: 'items-start', center: 'items-center', end: 'items-end' }[align]
  const justifyClass = justify
    ? { start: 'justify-start', center: 'justify-center', between: 'justify-between' }[justify]
    : ''
  return (
    <div className={`flex flex-wrap ${alignClass} ${justifyClass} ${FLEX_GAP[gap]} ${className}`.trim()}>
      {children}
    </div>
  )
}
