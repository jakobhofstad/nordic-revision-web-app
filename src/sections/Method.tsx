import { Eyebrow } from '../components/Eyebrow'
import { MethodStep } from '../components/MethodStep'
import { CONTAINER, SECTIONS } from '../theme/sections'

export function Method() {
  return (
    <section id={SECTIONS.metode} className="relative overflow-hidden bg-indigo text-white">
      <img
        src="/logos/symbol-white.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-120px] left-[-160px] w-[560px] opacity-[0.05]"
      />
      <div className={`relative ${CONTAINER} px-8 py-28`}>
        <Eyebrow index="02" label="Metode" onDark />
        <h2 className="m-0 mb-16 max-w-[620px] text-[clamp(30px,3.6vw,44px)] font-medium leading-[1.1] tracking-[-0.02em] text-white">
          Slik jobber vi gjennom året
        </h2>

        <div className="grid grid-cols-4 gap-0">
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
  )
}
