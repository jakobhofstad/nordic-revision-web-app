import { Eyebrow } from '../components/Eyebrow'
import { TeamCard } from '../components/TeamCard'
import { CONTAINER, SECTIONS } from '../theme/sections'

export function About() {
  return (
    <section id={SECTIONS.omOss} className="border-t border-line bg-warm-grey">
      <div className={`${CONTAINER} px-8 py-28`}>
        <div className="mb-18 grid grid-cols-2 items-start gap-20">
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
        </div>

        <div className="grid grid-cols-3 gap-6">
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
  )
}
