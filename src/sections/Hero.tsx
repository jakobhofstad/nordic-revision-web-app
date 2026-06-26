import { Cluster, Grid } from '../components/layout'
import { ArrowRight, CheckIcon, Icon } from '../components/icons'
import { CONTAINER, SECTIONS } from '../theme/sections'

const CREDENTIALS = [
  'Statsautoriserte revisorer',
  'Registrert i Revisorregisteret',
  'Medlem av Revisorforeningen',
]

export function Hero({ go }: { go: (id: string) => () => void }) {
  return (
    <section id="top" className="relative overflow-hidden bg-warm-grey text-ink">
      {/* Soft purple gradient wash, the signature backdrop for the light theme. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-3/4 w-3/4 -translate-y-1/4 translate-x-1/4 rounded-full bg-lilac/30 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 -translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-tint blur-[80px]" />
      </div>

      <div className={`relative ${CONTAINER} pb-20 pt-32 md:pb-28 md:pt-44`}>
        <Grid cols={{ base: 1, lg: 2 }} gap="lg" className="items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-indigo">
              <span className="inline-block h-px w-[22px] bg-lilac" />
              Autorisert revisjonsselskap
            </div>
            <h1 className="m-0 mb-7 text-[clamp(44px,6.2vw,76px)] font-medium leading-none tracking-[-0.035em] text-indigo [text-wrap:balance]">
              Verdiskaping
              <br />
              gjennom{' '}
              <span className="relative whitespace-nowrap">
                <span className="absolute inset-x-0 bottom-[0.07em] h-[0.13em] bg-lilac" />
                <span className="relative">innsikt</span>
              </span>
            </h1>
            <p className="m-0 mb-10 max-w-[560px] text-[clamp(18px,2vw,21px)] leading-[1.6] text-ink-muted">
              Lovpålagt revisjon for små og mellomstore bedrifter, levert med presisjon, nærhet og et blikk for det som
              faktisk skaper verdi i tallene dine.
            </p>
            <Cluster gap="sm">
              <button
                onClick={go(SECTIONS.kontakt)}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-md bg-indigo px-[26px] py-3.5 font-sans text-[17px] font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Book et møte
                <ArrowRight />
              </button>
              <button
                onClick={go(SECTIONS.tjenester)}
                className="glass-panel cursor-pointer rounded-md px-[26px] py-3.5 font-sans text-[17px] font-medium text-indigo transition-transform duration-200 hover:-translate-y-0.5"
              >
                Se hva vi gjør
              </button>
            </Cluster>
          </div>

          {/* Glass highlight card */}
          <div className="glass-panel relative rounded-[16px] p-8 shadow-card md:p-10">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-tint text-indigo">
                <Icon size={24} stroke="#312783" strokeWidth={1.7}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </Icon>
              </div>
              <div>
                <h2 className="m-0 text-[21px] font-medium tracking-[-0.01em] text-indigo">Trygghet i tall</h2>
                <p className="m-0 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-soft">Nordisk presisjon</p>
              </div>
            </div>
            <ul className="m-0 flex list-none flex-col gap-5 p-0">
              {CREDENTIALS.map((t) => (
                <li key={t} className="flex items-start gap-3.5">
                  <span className="mt-0.5 shrink-0">
                    <CheckIcon stroke="#312783" size={18} />
                  </span>
                  <span className="text-[15px] leading-[1.5] text-ink-muted">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </div>
    </section>
  )
}
