/* ---------- method step ---------- */
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
    <div className={`border-l border-white/16 pl-7 ${last ? 'pr-0' : 'pr-7'}`}>
      <div className="mb-5.5 font-mono text-[14px] text-lilac">{num}</div>
      <h3 className="m-0 mb-2.5 text-xl font-medium text-white">{title}</h3>
      <p className="m-0 text-[15px] leading-[1.6] text-white/66">{body}</p>
    </div>
  )
}
