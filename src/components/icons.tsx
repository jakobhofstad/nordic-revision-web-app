import type { ReactNode } from 'react'

/* ---------- small inline icon helper ---------- */
type IconProps = { size?: number; stroke?: string; strokeWidth?: number; children: ReactNode }

export function Icon({ size = 24, stroke = 'currentColor', strokeWidth = 1.75, children }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

export const CheckIcon = (p: { stroke: string; size?: number }) => (
  <Icon size={p.size ?? 15} stroke={p.stroke} strokeWidth={1.9}>
    <polyline points="20 6 9 17 4 12" />
  </Icon>
)

export const ArrowRight = () => (
  <Icon size={17} strokeWidth={1.9}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Icon>
)
