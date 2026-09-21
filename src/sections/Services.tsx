import { Grid, Section } from '../components/layout'
import { ServiceCard } from '../components/ServiceCard'
import { ArrowRight } from '../components/icons'
import services from '../content/services.json'
export function Services() {
  return (
    <Section id="tjenester" tone="white">
      <Grid cols={{ base: 1, md: 2 }} gap="lg" className="section-heading">
        <div>
          <p className="eyebrow">{services.eyebrow}</p>
          <h2>{services.title}</h2>
        </div>
        <div className="heading-aside">
          <p>{services.lead}</p>
          <a className="text-link" href="#kontakt">
            {services.linkLabel}
            <ArrowRight />
          </a>
        </div>
      </Grid>
      <Grid cols={{ base: 1, md: 2, lg: 4 }} gap="sm">
        {services.items.map((item) => (
          <ServiceCard
            key={item.title}
            {...item}
            moreLabel={services.moreLabel}
          />
        ))}
      </Grid>
    </Section>
  )
}
