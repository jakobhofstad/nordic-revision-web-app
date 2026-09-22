import { useState } from 'react'
import { ContactRow } from '../components/ContactRow'
import { Eyebrow } from '../components/Eyebrow'
import { Field } from '../components/Field'
import { Cluster, Grid, Section, Stack } from '../components/layout'
import { ArrowRight, CheckIcon, Icon } from '../components/icons'
import { glyph } from '../components/glyphs'
import { SECTIONS } from '../theme/sections'
import contact from '../content/contact.json'
import site from '../content/site.json'

const ROWS = [
  { label: 'E-post', value: site.email, icon: 'mail' },
  { label: 'Telefon', value: site.phone, icon: 'phone' },
  { label: 'Besøk', value: contact.visit, icon: 'pin' },
]

export function Contact() {
  const [navn, setNavn] = useState('')
  const [epost, setEpost] = useState('')
  const [selskap, setSelskap] = useState('')
  const [melding, setMelding] = useState('')
  const [tema, setTema] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <Section id={SECTIONS.kontakt} tone="indigo-deep">
      <Grid cols={{ base: 1, lg: 2 }} gap="lg" className="items-start">
        <div>
          <Eyebrow index="04" label={contact.eyebrow} onDark />
          <h2 className="m-0 mb-5.5 text-[clamp(30px,3.4vw,44px)] font-medium leading-[1.1] tracking-[-0.02em] text-white [text-wrap:balance]">
            {contact.title}
          </h2>
          <p className="m-0 mb-11 max-w-[440px] text-[18px] leading-[1.6] text-white/70">{contact.lead}</p>

          <Stack gap="md">
            {ROWS.map((r) => (
              <ContactRow
                key={r.label}
                label={r.label}
                value={r.value}
                icon={
                  <Icon size={19} stroke="#BCB6E8">
                    {glyph(r.icon)}
                  </Icon>
                }
              />
            ))}
          </Stack>
        </div>

        <div className="overflow-hidden rounded-[14px] bg-white shadow-[0_24px_50px_-12px_rgba(0,0,0,0.45)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#ECECEB] px-6 py-5.5 md:px-9">
            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-indigo">{contact.form.heading}</span>
            <span className="inline-flex items-center gap-[7px] text-[13px] text-ink-soft">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#16A34A]" />
              {contact.form.status}
            </span>
          </div>
          <div className="px-6 pb-9 pt-8 md:px-9">
            {sent ? (
              <div className="flex flex-col items-start gap-4 py-4 text-ink">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-indigo-tint">
                  <CheckIcon stroke="#312783" size={26} />
                </div>
                <h3 className="m-0 text-[23px] font-medium">{contact.form.successTitle}</h3>
                <p className="m-0 text-base leading-[1.6] text-ink-soft">{contact.form.successBody}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <Grid cols={{ base: 1, md: 2 }} gap="sm">
                  <Field label="Navn" placeholder="Ola Nordmann" value={navn} onChange={setNavn} />
                  <Field label="E-post" type="email" placeholder="ola@selskap.no" value={epost} onChange={setEpost} />
                </Grid>
                <Field label="Selskap" placeholder="Selskap AS" value={selskap} onChange={setSelskap} />
                <div className="flex flex-col gap-[9px]">
                  <label className="font-sans text-[13px] font-medium text-ink">Hva gjelder det?</label>
                  <Cluster gap="xs">
                    {contact.form.topics.map((t) => {
                      const active = tema === t
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTema(active ? '' : t)}
                          className={`cursor-pointer rounded-full border px-3.5 py-2 font-sans text-[14px] font-medium transition-colors duration-150 ${
                            active
                              ? 'border-indigo bg-indigo-tint text-indigo'
                              : 'border-[#E2E5EF] bg-white text-ink-soft'
                          }`}
                        >
                          {t}
                        </button>
                      )
                    })}
                  </Cluster>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[13px] font-medium text-ink">Melding</label>
                  <textarea
                    value={melding}
                    onChange={(e) => setMelding(e.target.value)}
                    placeholder="Fortell kort om selskapet og hva du trenger hjelp med"
                    rows={4}
                    className="w-full resize-y rounded-md border border-field-line px-3 py-2.5 font-sans text-[15px] text-ink outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-0.5 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-md bg-indigo px-[22px] py-[14px] font-sans text-base font-medium text-white transition-colors duration-150 hover:bg-[#271E69]"
                >
                  {contact.form.submit}
                  <ArrowRight />
                </button>
                <p className="m-0 inline-flex items-center justify-center gap-[7px] text-center text-[12px] text-[#878582]">
                  <Icon size={13} stroke="currentColor" strokeWidth={1.9}>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </Icon>
                  {contact.form.privacy}
                </p>
              </form>
            )}
          </div>
        </div>
      </Grid>
    </Section>
  )
}
