/* ---------- method timeline node (the dot echoes the brand's floating symbol) ---------- */
export function MethodStep({
  num,
  title,
  body,
  last,
}: {
  num: string
  title: string
  body: string
  last?: boolean
}) {
  return (
    <div className="relative">
      <div
        className={`mb-7.5 h-[18px] w-[18px] rounded-full shadow-[0_0_0_4px_#312783] ${
          last ? 'bg-white' : 'bg-lilac'
        }`}
      />
      <div className="mb-3.5 font-mono text-[13px] text-lilac">{num}</div>
      <h3 className="m-0 mb-2.5 text-xl font-medium text-white">{title}</h3>
      <p className="m-0 text-[15px] leading-[1.6] text-white/66">{body}</p>
    </div>
  )
}
