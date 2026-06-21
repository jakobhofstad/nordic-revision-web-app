import { ArrowRight, CheckIcon } from '../components/icons'
import { CONTAINER, SECTIONS } from '../theme/sections'

const CREDENTIALS = [
  'Statsautoriserte revisorer',
  'Registrert i Revisorregisteret',
  'Medlem av Revisorforeningen',
]

export function Hero({ go }: { go: (id: string) => () => void }) {
  return (
    <section id="top" className="relative overflow-hidden bg-indigo text-white">
      <img
        src="/logos/symbol-white.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-10 w-[720px] opacity-[0.06]"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(900px 520px at 78% 8%, rgba(110,99,202,0.30), transparent 70%)' }}
      />
      <div className={`relative ${CONTAINER} px-8 pb-26 pt-46`}>
        <div className="max-w-[760px]">
          <div className="mb-7 inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-lilac-soft">
            <span className="inline-block h-px w-[22px] bg-focus" />
            Autorisert revisjonsselskap
          </div>
          <h1 className="m-0 mb-7 text-[clamp(46px,6.6vw,82px)] font-medium leading-none tracking-[-0.035em] text-white [text-wrap:balance]">
            Verdiskaping
            <br />
            gjennom{' '}
            <span className="relative whitespace-nowrap text-white">
              <span className="absolute inset-x-0 bottom-[0.07em] h-[0.13em] bg-focus" />
              <span className="relative">innsikt</span>
            </span>
          </h1>
          <p className="m-0 mb-10 max-w-[600px] text-[clamp(18px,2vw,21px)] leading-[1.6] text-white/78">
            Lovpålagt revisjon for små og mellomstore bedrifter — levert med presisjon, nærhet og et blikk for det som
            faktisk skaper verdi i tallene dine.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <button
              onClick={go(SECTIONS.kontakt)}
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-md bg-white px-[26px] py-3.5 font-sans text-[17px] font-medium text-indigo"
            >
              Book et møte
              <ArrowRight />
            </button>
            <button
              onClick={go(SECTIONS.tjenester)}
              className="cursor-pointer rounded-md border border-white/28 bg-white/8 px-[26px] py-3.5 font-sans text-[17px] font-medium text-white"
            >
              Se hva vi gjør
            </button>
          </div>
        </div>
      </div>

      {/* credentials strip */}
      <div className="relative border-t border-white/12">
        <div className={`${CONTAINER} flex flex-wrap items-center gap-x-11 gap-y-3.5 px-8 py-5.5`}>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">Tillit forankret i</span>
          {CREDENTIALS.map((t) => (
            <span key={t} className="inline-flex items-center gap-[9px] text-[14px] text-white/82">
              <CheckIcon stroke="#9A91DC" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
