/* ---------- section eyebrow (e.g. "01 · Tjenester") ---------- */
export function Eyebrow({ index, label, onDark }: { index: string; label: string; onDark?: boolean }) {
  return (
    <div className="mb-4 flex items-baseline gap-4">
      <span className={`font-mono text-[13px] ${onDark ? 'text-white/40' : 'text-[#adadaa]'}`}>{index}</span>
      <span
        className={`font-mono text-[12px] uppercase tracking-[0.12em] ${onDark ? 'text-lilac-soft' : 'text-indigo'}`}
      >
        {label}
      </span>
    </div>
  )
}
