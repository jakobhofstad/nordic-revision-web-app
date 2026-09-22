import { useEffect, useState } from 'react'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { LogoIntro } from './sections/LogoIntro'
import { Intro } from './sections/Intro'
import { Services } from './sections/Services'
import { Method } from './sections/Method'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

/* ============================================================
   Nordic Revisjon — landing page
   Brand: Indigo #312783 · Warm grey #F3F3F2 · Volte typeface
   Brand tokens live in src/index.css (@theme); sections in src/sections.
   ============================================================ */

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [intro, setIntro] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => () => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 76
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="bg-warm-grey font-sans text-ink antialiased">
      {intro && <LogoIntro onDone={() => setIntro(false)} />}
      <Header scrolled={scrolled} go={go} goTop={goTop} />
      <Hero go={go} />
      <Intro />
      <Services />
      <Method />
      <About />
      <Contact />
      <Footer go={go} />
    </div>
  )
}
