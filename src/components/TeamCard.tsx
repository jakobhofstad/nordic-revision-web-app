/* ---------- team card ---------- */
export function TeamCard({ name, role, body }: { name: string; role: string; body: string }) {
  return (
    <div className="rounded-lg border border-line bg-white p-7 shadow-card">
      <div className="mb-5 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-indigo-tint font-mono text-[11px] uppercase tracking-[0.1em] text-lilac">
        Portrett
      </div>
      <h3 className="m-0 mb-1 text-[19px] font-medium">{name}</h3>
      <div className="mb-3 text-[14px] font-medium text-indigo">{role}</div>
      <p className="m-0 text-[15px] leading-[1.55] text-ink-soft">{body}</p>
    </div>
  )
}
