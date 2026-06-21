/* ---------- header nav button ---------- */
export function NavButton({ label, color, onClick }: { label: string; color: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-md border-none bg-none px-3.5 py-2 font-sans text-[15px] font-medium"
      style={{ color }}
    >
      {label}
    </button>
  )
}
