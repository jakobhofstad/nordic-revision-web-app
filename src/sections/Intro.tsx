import { CONTAINER } from '../theme/sections'

export function Intro() {
  return (
    <section className="bg-warm-grey">
      <div className={`${CONTAINER} grid grid-cols-2 items-start gap-20 px-8 py-26`}>
        <div>
          <div className="mb-4.5 font-mono text-[12px] uppercase tracking-[0.12em] text-indigo">
            Hvorfor Nordic Revisjon
          </div>
          <h2 className="m-0 text-[clamp(30px,3.4vw,42px)] font-medium leading-[1.12] tracking-[-0.02em] [text-wrap:balance]">
            Revisjon skal være mer enn en formalitet.
          </h2>
        </div>
        <div className="pt-1.5">
          <p className="m-0 mb-5 text-[19px] leading-[1.65] text-ink-muted">
            Vi er et moderne revisjonsselskap bygget for bedrifter som vil forstå tallene sine — ikke bare få dem
            godkjent. Hver revisjon gir deg trygghet for at regnskapet stemmer, og innsikt du kan handle på.
          </p>
          <p className="m-0 text-[19px] leading-[1.65] text-ink-muted">
            Du møter de samme menneskene gjennom hele året, snakker direkte med revisoren din, og får råd på et språk du
            faktisk kan bruke i styrerommet.
          </p>
        </div>
      </div>
    </section>
  )
}
