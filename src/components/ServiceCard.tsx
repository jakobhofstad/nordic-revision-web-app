import type { ReactNode } from 'react'

/* ---------- services arch (the colonnade motif echoes the brand symbol) ---------- */
export function ServiceCard({ icon, title, body, num }: { icon: ReactNode; title: string; body: string; num: string }) {
  return (
    <div className="flex flex-col">
      <div className="relative flex h-36 items-center justify-center rounded-[9999px_9999px_4px_4px] bg-indigo">
        <span className="absolute inset-x-0 top-[18px] text-center font-mono text-[12px] tracking-[0.1em] text-white/45">
          {num}
        </span>
        {icon}
      </div>
      <h3 className="m-0 mb-2.5 mt-6.5 text-xl font-medium tracking-[-0.01em]">{title}</h3>
      <p className="m-0 text-[15px] leading-[1.6] text-ink-soft">{body}</p>
    </div>
  )
}
