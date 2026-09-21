import { Eyebrow } from '../components/Eyebrow'
import { Decor, Grid, Section } from '../components/layout'
import { MethodStep } from '../components/MethodStep'
import { SECTIONS } from '../theme/sections'
import method from '../content/method.json'

export function Method() {
  return (
    <Section
      id={SECTIONS.metode}
      tone="indigo"
      decor={
        <Decor>
          <img
            src="/logos/symbol-white.svg"
            alt=""
            className="absolute bottom-[-120px] left-[-160px] md:w-[560px] opacity-[0.05]"
          />
        </Decor>
      }
    >
      <Eyebrow index="02" label={method.eyebrow} onDark />
      <h2 className="m-0 mb-16 max-w-[620px] text-[clamp(30px,3.6vw,44px)] font-medium leading-[1.1] tracking-[-0.02em] text-white">
        {method.title}
      </h2>

      {/* connected timeline: a single line runs behind the row of nodes at desktop */}
      <div className="relative">
        <div className="absolute left-[9px] right-[9px] top-2 hidden h-px bg-white/18 lg:block" />
        <Grid cols={{ base: 1, md: 2, lg: 4 }} gap="timeline" className="relative">
          {method.steps.map((s, i) => (
            <MethodStep
              key={s.title}
              num={String(i + 1).padStart(2, '0')}
              title={s.title}
              body={s.body}
              last={i === method.steps.length - 1}
            />
          ))}
        </Grid>
      </div>
    </Section>
  )
}
