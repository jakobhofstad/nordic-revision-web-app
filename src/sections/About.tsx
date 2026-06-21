import { Eyebrow } from '../components/Eyebrow'
import { Grid, Section } from '../components/layout'
import { TeamCard } from '../components/TeamCard'
import { SECTIONS } from '../theme/sections'

export function About() {
  return (
    <Section id={SECTIONS.omOss} tone="warm-grey" borderTop>
      <Grid cols={{ base: 1, lg: 2 }} gap="lg" className="mb-18 items-start">
        <div>
          <Eyebrow index="03" label="Om oss" />
          <h2 className="m-0 text-[clamp(30px,3.4vw,42px)] font-medium leading-[1.12] tracking-[-0.02em] [text-wrap:balance]">
            Et lite, dedikert revisjonsmiljø
          </h2>
        </div>
        <div className="pt-1.5">
          <p className="m-0 mb-5 text-[19px] leading-[1.65] text-ink-muted">
            Nordic Revisjon er bygget på en enkel idé: at god revisjon kommer fra nære relasjoner og ekte forståelse
            for virksomheten. Vi holder bevisst teamet lite, så du alltid vet hvem som har hånd om regnskapet ditt.
          </p>
          <p className="m-0 text-[19px] leading-[1.65] text-ink-muted">
            Vi kombinerer solid revisjonsfaglig håndverk med moderne verktøy — og en arbeidsmåte som er ryddig,
            forutsigbar og fri for unødvendig byråkrati.
          </p>
        </div>
      </Grid>

      <Grid cols={{ base: 1, md: 3 }} gap="md">
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
      </Grid>
    </Section>
  )
}
