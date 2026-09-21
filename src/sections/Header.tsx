import { useEffect, useRef, useState } from 'react'
import { CONTAINER } from '../theme/sections'
import { ButtonLink } from '../components/ButtonLink'
import site from '../content/site.json'

export function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const resize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('keydown', close)
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('keydown', close)
      window.removeEventListener('resize', resize)
    }
  }, [open])
  const links = [
    { label: site.nav.tjenester, href: '#tjenester' },
    { label: site.nav.bransjer, href: '#bransjer' },
    { label: site.nav.omOss, href: '#om-oss' },
    { label: site.nav.kontakt, href: '#kontakt' },
  ]
  return (
    <header className="site-header" id="top">
      <div className={`${CONTAINER} header-inner`}>
        <a
          href="#top"
          aria-label={`${site.company}, forsiden`}
          onClick={() => setOpen(false)}
        >
          <img
            className="brand-logo"
            src="/logos/lockup-indigo.svg"
            alt={site.company}
            width="245"
            height="47"
          />
        </a>
        <nav aria-label="Hovedmeny" className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="desktop-cta">
          <ButtonLink href="#kontakt">{site.nav.cta}</ButtonLink>
        </div>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Lukk meny' : 'Åpne meny'}
          onClick={() => setOpen(!open)}
        >
          <span>{open ? 'Lukk' : 'Meny'}</span>
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobilmeny">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="button" href="#kontakt" onClick={() => setOpen(false)}>
            {site.nav.cta}
          </a>
        </nav>
      )}
    </header>
  )
}
