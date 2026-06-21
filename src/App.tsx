import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

/* ============================================================
   Nordic Revisjon — landing page
   Brand: Indigo #312783 · Warm grey #F3F3F2 · Volte typeface
   ============================================================ */

const SANS = "'Volte', system-ui, sans-serif"
const MONO = "'JetBrains Mono', monospace"

const SECTIONS = {
  tjenester: 'tjenester',
  metode: 'metode',
  omOss: 'om-oss',
  kontakt: 'kontakt',
} as const

/* ---------- small inline icon helper ---------- */
type IconProps = { size?: number; stroke?: string; strokeWidth?: number; children: ReactNode }
function Icon({ size = 24, stroke = 'currentColor', strokeWidth = 1.75, children }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

const CheckIcon = (p: { stroke: string; size?: number }) => (
  <Icon size={p.size ?? 15} stroke={p.stroke} strokeWidth={1.9}>
    <polyline points="20 6 9 17 4 12" />
  </Icon>
)

const ArrowRight = () => (
  <Icon size={17} strokeWidth={1.9}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Icon>
)

/* ---------- header nav button ---------- */
function NavButton({ label, color, onClick }: { label: string; color: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: SANS,
        fontSize: 15,
        fontWeight: 500,
        padding: '8px 14px',
        borderRadius: 6,
        color,
      }}
    >
      {label}
    </button>
  )
}

/* ---------- services card ---------- */
function ServiceCard({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E8E8E7',
        borderRadius: 8,
        padding: 32,
        boxShadow: '0 1px 3px rgba(17,21,35,0.05)',
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 8,
          background: '#EEEDF9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontSize: 21, fontWeight: 500, margin: '0 0 10px', letterSpacing: '-0.01em' }}>{title}</h3>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#5E5D5A', margin: 0 }}>{body}</p>
    </div>
  )
}

/* ---------- method step ---------- */
function MethodStep({
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
    <div
      style={{
        borderLeft: '1px solid rgba(255,255,255,0.16)',
        paddingLeft: 28,
        paddingRight: last ? 0 : 28,
      }}
    >
      <div style={{ fontFamily: MONO, fontSize: 14, color: '#9A91DC', marginBottom: 22 }}>{num}</div>
      <h3 style={{ fontSize: 20, fontWeight: 500, margin: '0 0 10px', color: '#fff' }}>{title}</h3>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.66)', margin: 0 }}>{body}</p>
    </div>
  )
}

/* ---------- team card ---------- */
function TeamCard({ name, role, body }: { name: string; role: string; body: string }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E8E8E7',
        borderRadius: 8,
        padding: 28,
        boxShadow: '0 1px 3px rgba(17,21,35,0.05)',
      }}
    >
      <div
        style={{
          width: 84,
          height: 84,
          borderRadius: '50%',
          background: '#EEEDF9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#9A91DC',
        }}
      >
        Portrett
      </div>
      <h3 style={{ fontSize: 19, fontWeight: 500, margin: '0 0 4px' }}>{name}</h3>
      <div style={{ fontSize: 14, color: '#312783', fontWeight: 500, marginBottom: 12 }}>{role}</div>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: '#5E5D5A', margin: 0 }}>{body}</p>
    </div>
  )
}

/* ---------- labelled input (mirrors the design-system Input) ---------- */
function Field({
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, color: '#111010' }}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          fontFamily: SANS,
          fontSize: 15,
          color: '#111010',
          padding: '10px 12px',
          border: `1px solid ${focused ? '#6D63CA' : '#C9CEDF'}`,
          borderRadius: 6,
          outline: 'none',
          width: '100%',
          boxShadow: focused ? '0 0 0 3px rgba(49,39,131,0.20)' : 'none',
          transition: 'border-color 150ms ease, box-shadow 150ms ease',
        }}
      />
    </div>
  )
}

/* ---------- contact detail row ---------- */
function ContactRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 8,
          background: 'rgba(255,255,255,0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{label}</div>
        <div style={{ fontSize: 16 }}>{value}</div>
      </div>
    </div>
  )
}

/* ---------- section eyebrow (e.g. "01 · Tjenester") ---------- */
function Eyebrow({ index, label, onDark }: { index: string; label: string; onDark?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
      <span style={{ fontFamily: MONO, fontSize: 13, color: onDark ? 'rgba(255,255,255,0.4)' : '#ADADAA' }}>
        {index}
      </span>
      <span
        style={{
          fontFamily: MONO,
          fontSize: 12,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: onDark ? '#BCB6E8' : '#312783',
        }}
      >
        {label}
      </span>
    </div>
  )
}

const container: CSSProperties = { maxWidth: 1200, margin: '0 auto' }

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [navn, setNavn] = useState('')
  const [epost, setEpost] = useState('')
  const [selskap, setSelskap] = useState('')
  const [melding, setMelding] = useState('')
  const [sent, setSent] = useState(false)

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

  const header = useMemo(
    () => ({
      bg: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      shadow: scrolled ? '0 1px 3px rgba(17,21,35,0.10)' : 'none',
      navColor: scrolled ? '#444340' : 'rgba(255,255,255,0.88)',
      ctaBg: scrolled ? '#312783' : 'rgba(255,255,255,0.10)',
      ctaBorder: scrolled ? '#312783' : 'rgba(255,255,255,0.30)',
    }),
    [scrolled],
  )

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div
      style={{
        fontFamily: SANS,
        color: '#111010',
        background: '#F3F3F2',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* ============ HEADER ============ */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          transition: 'background 200ms ease, box-shadow 200ms ease',
          background: header.bg,
          boxShadow: header.shadow,
        }}
      >
        <div
          style={{
            ...container,
            padding: '0 32px',
            height: 76,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              goTop()
            }}
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', height: 21, textDecoration: 'none' }}
          >
            <img
              src="/logos/wordmark-white.svg"
              alt="Nordic Revisjon"
              style={{ height: 19, display: 'block', transition: 'opacity 200ms ease', opacity: scrolled ? 0 : 1 }}
            />
            <img
              src="/logos/wordmark-indigo.svg"
              alt=""
              aria-hidden="true"
              style={{
                height: 19,
                display: 'block',
                position: 'absolute',
                left: 0,
                top: 1,
                transition: 'opacity 200ms ease',
                opacity: scrolled ? 1 : 0,
              }}
            />
          </a>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <NavButton label="Tjenester" color={header.navColor} onClick={go(SECTIONS.tjenester)} />
            <NavButton label="Metode" color={header.navColor} onClick={go(SECTIONS.metode)} />
            <NavButton label="Om oss" color={header.navColor} onClick={go(SECTIONS.omOss)} />
            <button
              onClick={go(SECTIONS.kontakt)}
              style={{
                marginLeft: 12,
                background: header.ctaBg,
                color: '#fff',
                border: `1px solid ${header.ctaBorder}`,
                cursor: 'pointer',
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 500,
                padding: '9px 18px',
                borderRadius: 6,
              }}
            >
              Book et møte
            </button>
          </nav>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section id="top" style={{ position: 'relative', background: '#312783', color: '#fff', overflow: 'hidden' }}>
        <img
          src="/logos/symbol-white.svg"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', right: -120, top: 40, width: 720, opacity: 0.06, pointerEvents: 'none' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(900px 520px at 78% 8%, rgba(110,99,202,0.30), transparent 70%)',
          }}
        />
        <div style={{ position: 'relative', ...container, padding: '184px 32px 104px' }}>
          <div style={{ maxWidth: 760 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#BCB6E8',
                marginBottom: 28,
              }}
            >
              <span style={{ width: 22, height: 1, background: '#6D63CA', display: 'inline-block' }} />
              Autorisert revisjonsselskap
            </div>
            <h1
              style={{
                fontSize: 'clamp(46px, 6.6vw, 82px)',
                fontWeight: 500,
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
                margin: '0 0 28px',
                textWrap: 'balance',
                color: '#fff',
              }}
            >
              Verdiskaping
              <br />
              gjennom{' '}
              <span style={{ position: 'relative', whiteSpace: 'nowrap', color: '#fff' }}>
                <span
                  style={{ position: 'absolute', left: 0, right: 0, bottom: '0.07em', height: '0.13em', background: '#6D63CA' }}
                />
                <span style={{ position: 'relative' }}>innsikt</span>
              </span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(18px, 2vw, 21px)',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.78)',
                margin: '0 0 40px',
                maxWidth: 600,
              }}
            >
              Lovpålagt revisjon for små og mellomstore bedrifter — levert med presisjon, nærhet og et blikk for det som
              faktisk skaper verdi i tallene dine.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <button
                onClick={go(SECTIONS.kontakt)}
                style={{
                  background: '#fff',
                  color: '#312783',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: SANS,
                  fontSize: 17,
                  fontWeight: 500,
                  padding: '14px 26px',
                  borderRadius: 6,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                Book et møte
                <ArrowRight />
              </button>
              <button
                onClick={go(SECTIONS.tjenester)}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.28)',
                  cursor: 'pointer',
                  fontFamily: SANS,
                  fontSize: 17,
                  fontWeight: 500,
                  padding: '14px 26px',
                  borderRadius: 6,
                }}
              >
                Se hva vi gjør
              </button>
            </div>
          </div>
        </div>

        {/* credentials strip */}
        <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          <div
            style={{
              ...container,
              padding: '22px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px 44px',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              Tillit forankret i
            </span>
            {['Statsautoriserte revisorer', 'Registrert i Revisorregisteret', 'Medlem av Revisorforeningen'].map((t) => (
              <span
                key={t}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 14, color: 'rgba(255,255,255,0.82)' }}
              >
                <CheckIcon stroke="#9A91DC" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTRO / VALUE ============ */}
      <section style={{ background: '#F3F3F2' }}>
        <div
          style={{
            ...container,
            padding: '104px 32px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#312783',
                marginBottom: 18,
              }}
            >
              Hvorfor Nordic Revisjon
            </div>
            <h2
              style={{
                fontSize: 'clamp(30px, 3.4vw, 42px)',
                fontWeight: 500,
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                margin: 0,
                textWrap: 'balance',
              }}
            >
              Revisjon skal være mer enn en formalitet.
            </h2>
          </div>
          <div style={{ paddingTop: 6 }}>
            <p style={{ fontSize: 19, lineHeight: 1.65, color: '#444340', margin: '0 0 20px' }}>
              Vi er et moderne revisjonsselskap bygget for bedrifter som vil forstå tallene sine — ikke bare få dem
              godkjent. Hver revisjon gir deg trygghet for at regnskapet stemmer, og innsikt du kan handle på.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.65, color: '#444340', margin: 0 }}>
              Du møter de samme menneskene gjennom hele året, snakker direkte med revisoren din, og får råd på et språk du
              faktisk kan bruke i styrerommet.
            </p>
          </div>
        </div>
      </section>

      {/* ============ TJENESTER ============ */}
      <section id={SECTIONS.tjenester} style={{ background: '#fff', borderTop: '1px solid #E8E8E7' }}>
        <div style={{ ...container, padding: '112px 32px' }}>
          <Eyebrow index="01" label="Tjenester" />
          <h2
            style={{
              fontSize: 'clamp(30px, 3.6vw, 44px)',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 16px',
              maxWidth: 620,
            }}
          >
            Lovpålagt revisjon, gjort grundig
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: '#444340', margin: '0 0 56px', maxWidth: 620 }}>
            Vi tar hånd om hele den lovpålagte revisjonen — fra planlegging til revisjonsberetning — og dekker det som
            betyr mest for selskapet ditt.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            <ServiceCard
              title="Årsregnskap og noter"
              body="Vi reviderer årsregnskapet mot regnskapsloven og god regnskapsskikk, og sikrer at noter og opplysninger gir et riktig bilde."
              icon={
                <Icon size={22} stroke="#312783">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                  <line x1="9" y1="11" x2="12" y2="11" />
                </Icon>
              }
            />
            <ServiceCard
              title="Internkontroll og risiko"
              body="Vi vurderer rutiner og kontroller, avdekker svakheter før de blir kostbare, og gir konkrete råd om hvordan de styrkes."
              icon={
                <Icon size={22} stroke="#312783">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </Icon>
              }
            />
            <ServiceCard
              title="Skatt og avgift"
              body="Vi kontrollerer skatte- og avgiftsbehandlingen som en del av revisjonen, og fanger opp forhold som bør rettes eller dokumenteres."
              icon={
                <Icon size={22} stroke="#312783">
                  <line x1="19" y1="5" x2="5" y2="19" />
                  <circle cx="6.5" cy="6.5" r="2.5" />
                  <circle cx="17.5" cy="17.5" r="2.5" />
                </Icon>
              }
            />
            <ServiceCard
              title="Rapportering til styret"
              body="Du får en tydelig revisjonsberetning og et nummerert brev til styret med funn, anbefalinger og prioriteringer — uten fagsjargong."
              icon={
                <Icon size={22} stroke="#312783">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </Icon>
              }
            />
          </div>
        </div>
      </section>

      {/* ============ METODE ============ */}
      <section id={SECTIONS.metode} style={{ background: '#312783', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <img
          src="/logos/symbol-white.svg"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', left: -160, bottom: -120, width: 560, opacity: 0.05, pointerEvents: 'none' }}
        />
        <div style={{ position: 'relative', ...container, padding: '112px 32px' }}>
          <Eyebrow index="02" label="Metode" onDark />
          <h2
            style={{
              fontSize: 'clamp(30px, 3.6vw, 44px)',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 64px',
              maxWidth: 620,
              color: '#fff',
            }}
          >
            Slik jobber vi gjennom året
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            <MethodStep
              num="01"
              title="Bli kjent"
              body="Vi setter oss inn i bransjen, driften og menneskene bak tallene før vi planlegger revisjonen."
            />
            <MethodStep
              num="02"
              title="Planlegging og risiko"
              body="Vi identifiserer hvor risikoen er størst og retter innsatsen dit det betyr mest for regnskapet."
            />
            <MethodStep
              num="03"
              title="Gjennomføring"
              body="Vi tester, kontrollerer og dokumenterer effektivt — og holder deg løpende oppdatert underveis."
            />
            <MethodStep
              num="04"
              title="Rapport og dialog"
              body="Du får beretning, klare anbefalinger og en samtale om hva tallene betyr for veien videre."
              last
            />
          </div>
        </div>
      </section>

      {/* ============ OM OSS ============ */}
      <section id={SECTIONS.omOss} style={{ background: '#F3F3F2', borderTop: '1px solid #E8E8E7' }}>
        <div style={{ ...container, padding: '112px 32px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              alignItems: 'start',
              marginBottom: 72,
            }}
          >
            <div>
              <Eyebrow index="03" label="Om oss" />
              <h2
                style={{
                  fontSize: 'clamp(30px, 3.4vw, 42px)',
                  fontWeight: 500,
                  lineHeight: 1.12,
                  letterSpacing: '-0.02em',
                  margin: 0,
                  textWrap: 'balance',
                }}
              >
                Et lite, dedikert revisjonsmiljø
              </h2>
            </div>
            <div style={{ paddingTop: 6 }}>
              <p style={{ fontSize: 19, lineHeight: 1.65, color: '#444340', margin: '0 0 20px' }}>
                Nordic Revisjon er bygget på en enkel idé: at god revisjon kommer fra nære relasjoner og ekte forståelse
                for virksomheten. Vi holder bevisst teamet lite, så du alltid vet hvem som har hånd om regnskapet ditt.
              </p>
              <p style={{ fontSize: 19, lineHeight: 1.65, color: '#444340', margin: 0 }}>
                Vi kombinerer solid revisjonsfaglig håndverk med moderne verktøy — og en arbeidsmåte som er ryddig,
                forutsigbar og fri for unødvendig byråkrati.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <TeamCard
              name="Astrid Lindqvist"
              role="Partner · Statsautorisert revisor"
              body="Leder revisjonen for selskaper i vekst og styrer kvaliteten i alle oppdrag."
            />
            <TeamCard
              name="Henrik Dahl"
              role="Partner · Statsautorisert revisor"
              body="Spesialist på internkontroll og risiko, med bakgrunn fra større revisjonshus."
            />
            <TeamCard
              name="Mari Solberg"
              role="Revisor"
              body="Din daglige kontakt gjennom revisjonsåret og bindeledd inn i teamet."
            />
          </div>
        </div>
      </section>

      {/* ============ KONTAKT ============ */}
      <section id={SECTIONS.kontakt} style={{ background: '#100D35', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'relative',
            ...container,
            padding: '112px 32px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          <div>
            <Eyebrow index="04" label="Kontakt" onDark />
            <h2
              style={{
                fontSize: 'clamp(30px, 3.4vw, 44px)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: '0 0 22px',
                textWrap: 'balance',
                color: '#fff',
              }}
            >
              La oss ta en uforpliktende prat
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: '0 0 44px', maxWidth: 440 }}>
              Fortell oss kort om selskapet ditt, så finner vi ut om vi passer sammen. Vi svarer normalt innen én
              virkedag.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <ContactRow
                label="E-post"
                value="post@nordicrevisjon.no"
                icon={
                  <Icon size={19} stroke="#BCB6E8">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </Icon>
                }
              />
              <ContactRow
                label="Telefon"
                value="+47 22 00 00 00"
                icon={
                  <Icon size={19} stroke="#BCB6E8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </Icon>
                }
              />
              <ContactRow
                label="Besøk"
                value="Oslo · møter også digitalt"
                icon={
                  <Icon size={19} stroke="#BCB6E8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </Icon>
                }
              />
            </div>
          </div>

          <div style={{ background: '#fff', borderRadius: 12, padding: 36, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.25)' }}>
            {sent ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 16,
                  padding: '24px 0',
                  color: '#111010',
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: '#EEEDF9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CheckIcon stroke="#312783" size={26} />
                </div>
                <h3 style={{ fontSize: 23, fontWeight: 500, margin: 0 }}>Takk for henvendelsen</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#5E5D5A', margin: 0 }}>
                  Vi har mottatt meldingen din og tar kontakt innen én virkedag.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <Field label="Navn" placeholder="Ola Nordmann" value={navn} onChange={setNavn} />
                <Field label="E-post" type="email" placeholder="ola@selskap.no" value={epost} onChange={setEpost} />
                <Field label="Selskap" placeholder="Selskap AS" value={selskap} onChange={setSelskap} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, color: '#111010' }}>Melding</label>
                  <textarea
                    value={melding}
                    onChange={(e) => setMelding(e.target.value)}
                    placeholder="Fortell kort om selskapet og hva du trenger hjelp med"
                    rows={4}
                    style={{
                      fontFamily: SANS,
                      fontSize: 15,
                      color: '#111010',
                      padding: '10px 12px',
                      border: '1px solid #C9CEDF',
                      borderRadius: 6,
                      outline: 'none',
                      resize: 'vertical',
                      width: '100%',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    marginTop: 4,
                    background: '#312783',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: SANS,
                    fontSize: 16,
                    fontWeight: 500,
                    padding: '13px 22px',
                    borderRadius: 6,
                    width: '100%',
                  }}
                >
                  Send henvendelse
                </button>
                <p style={{ fontSize: 12, color: '#878582', margin: 0, textAlign: 'center' }}>
                  Vi behandler henvendelsen din konfidensielt.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{ background: '#312783', color: '#fff' }}>
        <div style={{ ...container, padding: '64px 32px 40px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: 48,
              flexWrap: 'wrap',
              paddingBottom: 44,
              borderBottom: '1px solid rgba(255,255,255,0.14)',
            }}
          >
            <div style={{ maxWidth: 320 }}>
              <img
                src="/logos/wordmark-white.svg"
                alt="Nordic Revisjon"
                style={{ height: 20, marginBottom: 18, display: 'block' }}
              />
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                Verdiskaping gjennom innsikt. Lovpålagt revisjon for små og mellomstore bedrifter.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 72, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: 4,
                  }}
                >
                  Sider
                </div>
                {[
                  { label: 'Tjenester', id: SECTIONS.tjenester },
                  { label: 'Metode', id: SECTIONS.metode },
                  { label: 'Om oss', id: SECTIONS.omOss },
                  { label: 'Kontakt', id: SECTIONS.kontakt },
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={go(l.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontFamily: SANS,
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.82)',
                    }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: 4,
                  }}
                >
                  Kontakt
                </div>
                {['post@nordicrevisjon.no', '+47 22 00 00 00', 'Oslo, Norge'].map((t) => (
                  <span key={t} style={{ fontSize: 15, color: 'rgba(255,255,255,0.82)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 16,
              paddingTop: 24,
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
              © 2026 Nordic Revisjon AS · Org.nr 000 000 000
            </span>
            <span
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              Registrert i Revisorregisteret
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
