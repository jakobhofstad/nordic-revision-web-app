import { Grid, Section } from '../components/layout'
import { Icon } from '../components/icons'
import { glyph } from '../components/glyphs'
import intro from '../content/intro.json'
export function Intro() {
  return (
    <Section tone="warm-grey" pad="py-8" className="value-strip">
      <Grid cols={{ base: 2, md: 2, lg: 4 }} gap="md">
        {intro.items.map((item) => (
          <div className="value-item" key={item.title}>
            <span aria-hidden="true">
              <Icon size={32}>{glyph(item.icon)}</Icon>
            </span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </Grid>
    </Section>
  )
}
