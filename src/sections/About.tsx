import { Grid, Section } from '../components/layout'
import { ButtonLink } from '../components/ButtonLink'
import about from '../content/about.json'
export function About() {
  return (
    <Section id="om-oss" tone="warm-grey" pad="" className="about-section">
      <Grid cols={{ base: 1, lg: 2 }} gap="none">
        <div className="about-photo">
          <img
            className="about-image"
            src={about.image}
            alt={about.imageAlt}
            loading="lazy"
            width="1200"
            height="800"
          />
          <div className="photo-signature">
            <img src="/logos/symbol-white.svg" alt="" width="68" height="68" />
            <span>{about.imageCaption}</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.title}</h2>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ButtonLink href="#kontakt">{about.cta}</ButtonLink>
        </div>
      </Grid>
    </Section>
  )
}
