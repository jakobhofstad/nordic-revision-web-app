import type { ReactNode } from 'react'

/* ---------- contact detail row ---------- */
export function ContactRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg bg-white/7">{icon}</div>
      <div>
        <div className="text-[13px] text-white/50">{label}</div>
        <div className="text-base">{value}</div>
      </div>
    </div>
  )
}
