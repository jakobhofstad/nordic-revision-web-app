/* ---------- team portrait (arch-topped, the colonnade motif rendered as people) ---------- */
export function TeamCard({ name, role, body }: { name: string; role: string; body: string }) {
  return (
    <div>
      <div className="relative mb-5.5 w-full overflow-hidden rounded-[9999px_9999px_8px_8px] bg-indigo-tint aspect-[4/4.6]">
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[11px] uppercase tracking-[0.1em] text-lilac">
          Portrett
        </div>
      </div>
      <h3 className="m-0 mb-1 text-xl font-medium tracking-[-0.01em]">{name}</h3>
      <div className="mb-3 text-[14px] font-medium text-indigo">{role}</div>
      <p className="m-0 text-[15px] leading-[1.55] text-ink-soft">{body}</p>
    </div>
  )
}
