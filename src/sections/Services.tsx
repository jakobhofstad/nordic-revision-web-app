import { Eyebrow } from '../components/Eyebrow'
import { Grid, Section } from '../components/layout'
import { Icon } from '../components/icons'
import { glyph } from '../components/glyphs'
import { ServiceCard } from '../components/ServiceCard'
import { SECTIONS } from '../theme/sections'
import services from '../content/services.json'

export function Services() {
  return (
    <Section id={SECTIONS.tjenester} tone="white" borderTop>
      <Eyebrow index="01" label={services.eyebrow} />
      <h2 className="m-0 mb-4 max-w-[620px] text-[clamp(30px,3.6vw,44px)] font-medium leading-[1.1] tracking-[-0.02em]">
        {services.title}
      </h2>
      <p className="m-0 mb-14 max-w-[620px] text-[19px] leading-[1.6] text-ink-muted">{services.lead}</p>

      <Grid cols={{ base: 1, md: 2, lg: 4 }} gap="arch">
        {services.items.map((s, i) => (
          <ServiceCard
            key={s.title}
            num={String(i + 1).padStart(2, '0')}
            title={s.title}
            body={s.body}
            icon={
              <Icon size={30} stroke="#fff" strokeWidth={1.6}>
                {glyph(s.icon)}
              </Icon>
            }
          />
        ))}
      </Grid>
    </Section>
  )
}
