import { Grid, Section } from '../components/layout'
import content from '../content/testimonials.json'
export function Testimonials() {
  return (
    <Section tone="white" pad="py-16 md:py-20">
      <Grid cols={{ base: 1, lg: 3 }} gap="md">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="compact-heading">{content.title}</h2>
          <p className="body-copy">{content.lead}</p>
        </div>
        {content.items.map((item) => (
          <article key={item.title} className="testimonial-placeholder">
            <p className="placeholder-label">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <span className="placeholder-line" aria-hidden="true" />
          </article>
        ))}
      </Grid>
    </Section>
  )
}
