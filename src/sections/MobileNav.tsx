import { useEffect } from 'react'
import { SECTIONS } from '../theme/sections'

/* ============================================================
   MobileNav: slide-in drawer for < lg viewports.

   Sits below the header (which keeps the toggle), locks body scroll while
   open, and closes on backdrop tap or link tap. Reuses the shared `go`
   navigation handler so anchor scrolling behaves identically to desktop.
   ============================================================ */

const LINKS = [
  { label: 'Tjenester', id: SECTIONS.tjenester },
  { label: 'Metode', id: SECTIONS.metode },
  { label: 'Om oss', id: SECTIONS.omOss },
]

export function MobileNav({
  open,
  onClose,
  go,
}: {
  open: boolean
  onClose: () => void
  go: (id: string) => () => void
}) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const handle = (id: string) => () => {
    go(id)()
    onClose()
  }

  return (
    <div className={`fixed inset-0 z-[150] lg:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-indigo-deep/40 transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <nav
        className={`absolute right-0 top-0 flex h-full w-[84%] max-w-[360px] flex-col gap-1 bg-white px-6 pb-8 pt-24 shadow-[0_0_40px_rgba(17,21,35,0.18)] transition-transform duration-200 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {LINKS.map((l) => (
          <button
            key={l.id}
            onClick={handle(l.id)}
            className="cursor-pointer rounded-md px-2 py-3 text-left font-sans text-[19px] font-medium text-ink"
          >
            {l.label}
          </button>
        ))}
        <button
          onClick={handle(SECTIONS.kontakt)}
          className="mt-4 cursor-pointer rounded-md bg-indigo px-5 py-3.5 text-center font-sans text-[17px] font-medium text-white"
        >
          Book et møte
        </button>
      </nav>
    </div>
  )
}
