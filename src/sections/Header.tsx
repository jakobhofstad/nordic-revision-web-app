import { useState } from 'react'
import { NavButton } from '../components/NavButton'
import { Icon } from '../components/icons'
import { CONTAINER, SECTIONS } from '../theme/sections'
import { MobileNav } from './MobileNav'

export function Header({ scrolled, go, goTop }: { scrolled: boolean; go: (id: string) => () => void; goTop: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        className={`glass-nav fixed inset-x-0 top-0 z-[200] transition-shadow duration-200 ${
          scrolled ? 'shadow-[0_1px_3px_rgba(17,21,35,0.08)]' : 'shadow-none'
        }`}
      >
        <div className={`${CONTAINER} flex h-19 items-center justify-between`}>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              setMenuOpen(false)
              goTop()
            }}
            className="inline-flex items-center no-underline"
          >
            <img src="/logos/lockup-indigo.svg" alt="Nordic Revisjon" className="block h-7 w-auto md:h-8" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            <NavButton label="Tjenester" color="#444340" onClick={go(SECTIONS.tjenester)} />
            <NavButton label="Metode" color="#444340" onClick={go(SECTIONS.metode)} />
            <NavButton label="Om oss" color="#444340" onClick={go(SECTIONS.omOss)} />
            <button
              onClick={go(SECTIONS.kontakt)}
              className="ml-3 cursor-pointer rounded-md bg-indigo px-[18px] py-[9px] font-sans text-[15px] font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book et møte
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
            aria-expanded={menuOpen}
            className="relative z-[210] -mr-2 cursor-pointer p-2 text-indigo lg:hidden"
          >
            <Icon size={26} stroke="currentColor" strokeWidth={1.9}>
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </Icon>
          </button>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} go={go} />
    </>
  )
}
