import type { ReactNode } from 'react'
import { CONTAINER } from '../../theme/sections'
import { SECTION_PAD } from '../../theme/breakpoints'

/* ============================================================
   Section: the outer shell for every page section.

   Owns: the element + anchor id, background tone (and matching text
   colour), overflow clipping, the responsive container/gutters, and the
   responsive vertical rhythm. Sections compose this instead of writing
   raw `<section>` + container + padding classes, so mobile gutters and
   spacing can never be forgotten.

   Background art goes in `decor` (a <Decor> element); it renders behind
   the content and outside the padded container.
   ============================================================ */

type Tone = 'warm-grey' | 'white' | 'indigo' | 'indigo-deep'

const TONE: Record<Tone, string> = {
  'warm-grey': 'bg-warm-grey text-ink',
  white: 'bg-white text-ink',
  indigo: 'bg-indigo text-white',
  'indigo-deep': 'bg-indigo-deep text-white',
}

export function Section({
  id,
  as: Tag = 'section',
  tone = 'warm-grey',
  borderTop = false,
  decor,
  pad = SECTION_PAD,
  className = '',
  innerClassName = '',
  children,
}: {
  id?: string
  as?: 'section' | 'footer'
  tone?: Tone
  borderTop?: boolean
  decor?: ReactNode
  /** Override the default vertical rhythm (e.g. hero needs extra top padding). */
  pad?: string
  className?: string
  innerClassName?: string
  children: ReactNode
}) {
  return (
    <Tag
      id={id}
      className={`relative overflow-hidden ${TONE[tone]} ${borderTop ? 'border-t border-line' : ''} ${className}`}
    >
      {decor}
      <div className={`relative ${CONTAINER} ${pad} ${innerClassName}`}>{children}</div>
    </Tag>
  )
}
