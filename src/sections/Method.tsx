import { Eyebrow } from '../components/Eyebrow'
import { Decor, Grid, Section } from '../components/layout'
import { MethodStep } from '../components/MethodStep'
import { SECTIONS } from '../theme/sections'

export function Method() {
  return (
    <Section
      id={SECTIONS.metode}
      tone="indigo"
      decor={
        <Decor>
          <img
            src="/logos/symbol-white.svg"
            alt=""
            className="absolute bottom-[-120px] left-[-160px] md:w-[560px] opacity-[0.05]"
          />
        </Decor>
      }
    >
      <Eyebrow index="02" label="Metode" onDark />
      <h2 className="m-0 mb-16 max-w-[620px] text-[clamp(30px,3.6vw,44px)] font-medium leading-[1.1] tracking-[-0.02em] text-white">
        Slik jobber vi gjennom året
      </h2>

      <Grid cols={{ base: 1, md: 2, lg: 4 }} gap="steps">
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
      </Grid>
    </Section>
  )
}
