import { useState } from 'react'

/* ---------- labelled input (mirrors the design-system Input) ---------- */
export function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder: string
  type?: string
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans text-[13px] font-medium text-ink">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full rounded-md border px-3 py-2.5 font-sans text-[15px] text-ink outline-none transition-[border-color,box-shadow] duration-150 ${
          focused ? 'border-focus ring-3 ring-indigo/20' : 'border-field-line'
        }`}
      />
    </div>
  )
}
