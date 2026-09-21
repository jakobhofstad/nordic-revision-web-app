import { Grid, Section, Cluster } from '../components/layout'
import { ArrowRight } from '../components/icons'
import content from '../content/industries.json'
export function Industries() {
  return (
    <Section id="bransjer" tone="warm-grey" pad="py-12 md:py-16">
      <Grid cols={{ base: 1, md: 2 }} gap="lg">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="compact-heading">{content.title}</h2>
          <p className="body-copy">{content.lead}</p>
        </div>
        <div className="industry-aside">
          <Cluster gap="xs">
            {content.items.map((item) => (
              <span className="industry-label" key={item}>
                {item}
              </span>
            ))}
          </Cluster>
          <a href="#kontakt" className="text-link">
            {content.cta}
            <ArrowRight />
          </a>
        </div>
      </Grid>
    </Section>
  )
}
