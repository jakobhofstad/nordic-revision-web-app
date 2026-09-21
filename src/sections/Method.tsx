import { Grid, Section } from '../components/layout'
import method from '../content/method.json'
export function Method() {
  return (
    <Section id="metode" tone="white" pad="py-14 md:py-20">
      <Grid cols={{ base: 1, lg: 4 }} gap="md">
        <div>
          <p className="eyebrow">{method.eyebrow}</p>
          <h2 className="compact-heading">{method.title}</h2>
        </div>
        {method.steps.map((step, i) => (
          <div className="process-step" key={step.title}>
            <span className="step-number">{i + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </div>
        ))}
      </Grid>
    </Section>
  )
}
