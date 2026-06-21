import { useState } from 'react'
import { ContactRow } from '../components/ContactRow'
import { Eyebrow } from '../components/Eyebrow'
import { Field } from '../components/Field'
import { CheckIcon, Icon } from '../components/icons'
import { CONTAINER, SECTIONS } from '../theme/sections'

export function Contact() {
  const [navn, setNavn] = useState('')
  const [epost, setEpost] = useState('')
  const [selskap, setSelskap] = useState('')
  const [melding, setMelding] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id={SECTIONS.kontakt} className="relative overflow-hidden bg-indigo-deep text-white">
      <div className={`relative ${CONTAINER} grid grid-cols-2 items-start gap-20 px-8 py-28`}>
        <div>
          <Eyebrow index="04" label="Kontakt" onDark />
          <h2 className="m-0 mb-5.5 text-[clamp(30px,3.4vw,44px)] font-medium leading-[1.1] tracking-[-0.02em] text-white [text-wrap:balance]">
            La oss ta en uforpliktende prat
          </h2>
          <p className="m-0 mb-11 max-w-[440px] text-[18px] leading-[1.6] text-white/70">
            Fortell oss kort om selskapet ditt, så finner vi ut om vi passer sammen. Vi svarer normalt innen én
            virkedag.
          </p>

          <div className="flex flex-col gap-5.5">
            <ContactRow
              label="E-post"
              value="post@nordicrevisjon.no"
              icon={
                <Icon size={19} stroke="#BCB6E8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </Icon>
              }
            />
            <ContactRow
              label="Telefon"
              value="+47 22 00 00 00"
              icon={
                <Icon size={19} stroke="#BCB6E8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </Icon>
              }
            />
            <ContactRow
              label="Besøk"
              value="Oslo · møter også digitalt"
              icon={
                <Icon size={19} stroke="#BCB6E8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </Icon>
              }
            />
          </div>
        </div>

        <div className="rounded-xl bg-white p-9 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.25)]">
          {sent ? (
            <div className="flex flex-col items-start gap-4 py-6 text-ink">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-indigo-tint">
                <CheckIcon stroke="#312783" size={26} />
              </div>
              <h3 className="m-0 text-[23px] font-medium">Takk for henvendelsen</h3>
              <p className="m-0 text-base leading-[1.6] text-ink-soft">
                Vi har mottatt meldingen din og tar kontakt innen én virkedag.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4.5">
              <Field label="Navn" placeholder="Ola Nordmann" value={navn} onChange={setNavn} />
              <Field label="E-post" type="email" placeholder="ola@selskap.no" value={epost} onChange={setEpost} />
              <Field label="Selskap" placeholder="Selskap AS" value={selskap} onChange={setSelskap} />
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
                className="mt-1 w-full cursor-pointer rounded-md bg-indigo px-[22px] py-[13px] font-sans text-base font-medium text-white"
              >
                Send henvendelse
              </button>
              <p className="m-0 text-center text-[12px] text-[#878582]">Vi behandler henvendelsen din konfidensielt.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
