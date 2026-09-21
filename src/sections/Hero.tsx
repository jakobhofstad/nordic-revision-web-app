import { Section, Cluster } from '../components/layout'
import { ButtonLink } from '../components/ButtonLink'
import hero from '../content/hero.json'
export function Hero() {
  return (
    <Section
      tone="warm-grey"
      pad=""
      className="hero"
      decor={
        <div className="hero-photo">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            fetchPriority="high"
            width="2000"
            height="1333"
          />
          <span className="hero-caption">{hero.caption}</span>
        </div>
      }
    >
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p className="hero-lead">{hero.lead}</p>
        <Cluster gap="sm">
          <ButtonLink href="#kontakt">{hero.ctaPrimary}</ButtonLink>
          <ButtonLink href="#metode" secondary>
            {hero.ctaSecondary}
          </ButtonLink>
        </Cluster>
      </div>
    </Section>
  )
}
