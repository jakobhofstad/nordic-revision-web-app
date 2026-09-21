import { Accent } from '../components/Accent'
import { Decor, Grid, Section } from '../components/layout'
import intro from '../content/intro.json'

export function Intro() {
  return (
    <Section
      tone="warm-grey"
      pad="py-16 md:py-24 lg:py-[116px]"
      decor={
        <Decor>
          <img
            src="/logos/symbol-indigo.svg"
            alt=""
            className="absolute left-1/2 top-[-70px] -translate-x-1/2 md:w-[440px] opacity-[0.05]"
          />
        </Decor>
      }
    >
      <div className="mx-auto max-w-[1180px] text-center">
        <div className="mb-6.5 inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-indigo">
          <span className="inline-block h-px w-[22px] bg-lilac-soft" />
          {intro.eyebrow}
          <span className="inline-block h-px w-[22px] bg-lilac-soft" />
        </div>
        <h2 className="m-0 mx-auto max-w-[16ch] text-[clamp(36px,5vw,62px)] font-medium leading-[1.05] tracking-[-0.035em] [text-wrap:balance]">
          <Accent text={intro.title} word={intro.highlight} render={(w) => <span className="text-indigo">{w}</span>} />
        </h2>
      </div>

      <div className="mx-auto mt-13 max-w-[940px]">
        <Grid cols={{ base: 1, md: 2 }} gap="lg">
          {intro.paragraphs.map((p) => (
            <p key={p} className="m-0 text-[18px] leading-[1.7] text-ink-muted">
              {p}
            </p>
          ))}
        </Grid>
      </div>
    </Section>
  )
}
