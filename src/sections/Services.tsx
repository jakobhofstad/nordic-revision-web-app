import { Eyebrow } from '../components/Eyebrow'
import { Grid, Section } from '../components/layout'
import { Icon } from '../components/icons'
import { ServiceCard } from '../components/ServiceCard'
import { SECTIONS } from '../theme/sections'

export function Services() {
  return (
    <Section id={SECTIONS.tjenester} tone="white" borderTop>
      <Eyebrow index="01" label="Tjenester" />
      <h2 className="m-0 mb-4 max-w-[620px] text-[clamp(30px,3.6vw,44px)] font-medium leading-[1.1] tracking-[-0.02em]">
        Lovpålagt revisjon, gjort grundig
      </h2>
      <p className="m-0 mb-14 max-w-[620px] text-[19px] leading-[1.6] text-ink-muted">
        Vi tar hånd om hele den lovpålagte revisjonen — fra planlegging til revisjonsberetning — og dekker det som
        betyr mest for selskapet ditt.
      </p>

      <Grid cols={{ base: 1, md: 2 }} gap="sm">
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
      </Grid>
    </Section>
  )
}
