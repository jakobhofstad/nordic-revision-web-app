import { Section } from '../components/layout'
import { SECTIONS } from '../theme/sections'

const PAGE_LINKS = [
  { label: 'Tjenester', id: SECTIONS.tjenester },
  { label: 'Metode', id: SECTIONS.metode },
  { label: 'Om oss', id: SECTIONS.omOss },
  { label: 'Kontakt', id: SECTIONS.kontakt },
]

const CONTACT_LINES = ['post@nordicrevisjon.no', '+47 22 00 00 00', 'Trondheim, Norge']

export function Footer({ go }: { go: (id: string) => () => void }) {
  return (
    <Section as="footer" tone="indigo" pad="pb-10 pt-16">
      <div className="flex flex-wrap items-start justify-between gap-12 border-b border-white/14 pb-11">
        <div className="max-w-[320px]">
          <img src="/logos/wordmark-white.svg" alt="Nordic Revisjon" className="mb-4.5 block h-5" />
          <p className="m-0 text-[15px] leading-[1.6] text-white/60">
            Verdiskaping gjennom innsikt. Lovpålagt revisjon for små og mellomstore bedrifter.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-[72px] gap-y-8">
          <div className="flex flex-col gap-3">
            <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">Sider</div>
            {PAGE_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={go(l.id)}
                className="cursor-pointer border-none bg-none p-0 text-left font-sans text-[15px] text-white/82"
              >
                {l.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">Kontakt</div>
            {CONTACT_LINES.map((t) => (
              <span key={t} className="text-[15px] text-white/82">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
        <span className="text-[13px] text-white/45">© 2026 Nordic Revisjon AS · Org.nr 000 000 000</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/45">
          Registrert i Revisorregisteret
        </span>
      </div>
    </Section>
  )
}
