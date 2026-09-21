import type { ReactNode } from 'react'
import { ArrowRight } from './icons'
export function ButtonLink({
  href,
  children,
  secondary = false,
  light = false,
}: {
  href: string
  children: ReactNode
  secondary?: boolean
  light?: boolean
}) {
  return (
    <a
      className={`button ${secondary ? 'button-secondary' : ''} ${light ? 'button-light' : ''}`}
      href={href}
    >
      {children}
      <ArrowRight />
    </a>
  )
}
