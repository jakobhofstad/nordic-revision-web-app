import { Eyebrow } from '../components/Eyebrow'
import { Grid, Section } from '../components/layout'
import { TeamCard } from '../components/TeamCard'
import { SECTIONS } from '../theme/sections'
import about from '../content/about.json'

// ponytail: Pages CMS drops empty fields on save, so body and photo may be missing
const team: { name: string; role: string; body?: string; photo?: string }[] = about.team

export function About() {
  return (
    <Section id={SECTIONS.omOss} tone="warm-grey" borderTop>
      <Grid cols={{ base: 1, lg: 2 }} gap="lg" className="mb-18 items-start">
        <div>
          <Eyebrow index="03" label={about.eyebrow} />
          <h2 className="m-0 text-[clamp(30px,3.4vw,42px)] font-medium leading-[1.12] tracking-[-0.02em] [text-wrap:balance]">
            {about.title}
          </h2>
        </div>
        <div className="pt-1.5">
          {about.paragraphs.map((p, i) => (
            <p key={p} className={`m-0 text-[19px] leading-[1.65] text-ink-muted ${i < about.paragraphs.length - 1 ? 'mb-5' : ''}`}>
              {p}
            </p>
          ))}
        </div>
      </Grid>

      <Grid cols={{ base: 1, md: 3 }} gap="portraits">
        {team.map((m) => (
          <TeamCard key={m.name} name={m.name} role={m.role} body={m.body} photo={m.photo} />
        ))}
      </Grid>
    </Section>
  )
}
