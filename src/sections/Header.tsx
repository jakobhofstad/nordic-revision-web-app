import { useState } from 'react'
import { NavButton } from '../components/NavButton'
import { Icon } from '../components/icons'
import { CONTAINER, SECTIONS } from '../theme/sections'
import { MobileNav } from './MobileNav'

export function Header({ scrolled, go, goTop }: { scrolled: boolean; go: (id: string) => () => void; goTop: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navColor = scrolled ? '#444340' : 'rgba(255,255,255,0.88)'
  const ctaBg = scrolled ? '#312783' : 'rgba(255,255,255,0.10)'
  const ctaBorder = scrolled ? '#312783' : 'rgba(255,255,255,0.30)'
  // The hamburger sits over both header states; pick a glyph colour that reads on each.
  const toggleColor = scrolled ? '#312783' : '#ffffff'

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[200] transition-[background,box-shadow] duration-200 ${
          scrolled ? 'bg-white/92 shadow-[0_1px_3px_rgba(17,21,35,0.10)]' : 'bg-transparent shadow-none'
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
            className="relative inline-flex h-[21px] items-center no-underline"
          >
            <img
              src="/logos/wordmark-white.svg"
              alt="Nordic Revisjon"
              className={`block h-[19px] transition-opacity duration-200 ${scrolled ? 'opacity-0' : 'opacity-100'}`}
            />
            <img
              src="/logos/wordmark-indigo.svg"
              alt=""
              aria-hidden="true"
              className={`absolute left-0 top-px block h-[19px] transition-opacity duration-200 ${
                scrolled ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            <NavButton label="Tjenester" color={navColor} onClick={go(SECTIONS.tjenester)} />
            <NavButton label="Metode" color={navColor} onClick={go(SECTIONS.metode)} />
            <NavButton label="Om oss" color={navColor} onClick={go(SECTIONS.omOss)} />
            <button
              onClick={go(SECTIONS.kontakt)}
              className="ml-3 cursor-pointer rounded-md border px-[18px] py-[9px] font-sans text-[15px] font-medium text-white"
              style={{ background: ctaBg, borderColor: ctaBorder }}
            >
              Book et møte
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
            aria-expanded={menuOpen}
            className="relative z-[210] -mr-2 cursor-pointer p-2 lg:hidden"
            style={{ color: menuOpen ? '#312783' : toggleColor }}
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
