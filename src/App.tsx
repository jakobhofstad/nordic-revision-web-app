import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Intro } from './sections/Intro'
import { Services } from './sections/Services'
import { About } from './sections/About'
import { Method } from './sections/Method'
import { Industries } from './sections/Industries'
import { Testimonials } from './sections/Testimonials'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Hopp til innhold
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <About />
        <Method />
        <Industries />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
