import type { ReactNode } from 'react'

/* ---------- services card ---------- */
export function ServiceCard({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-lg border border-line bg-white p-8 shadow-card">
      <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-lg bg-indigo-tint">{icon}</div>
      <h3 className="m-0 mb-2.5 text-[21px] font-medium tracking-[-0.01em]">{title}</h3>
      <p className="m-0 text-base leading-[1.6] text-ink-soft">{body}</p>
    </div>
  )
}
