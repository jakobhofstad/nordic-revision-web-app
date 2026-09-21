import { Decor, Section } from '../components/layout'
import { ButtonLink } from '../components/ButtonLink'
import contact from '../content/contact.json'
import site from '../content/site.json'
export function Contact() {
  const href = `mailto:${site.email}?subject=${encodeURIComponent(contact.emailSubject)}&body=${encodeURIComponent(contact.emailBody)}`
  return (
    <Section
      id="kontakt"
      tone="indigo"
      pad="py-16 md:py-20"
      className="contact-section"
      decor={
        <Decor>
          <img
            src="/logos/symbol-white.svg"
            alt=""
            className="contact-symbol absolute md:w-[470px]"
          />
        </Decor>
      }
    >
      <div className="contact-copy">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
        <p className="contact-lead">{contact.lead}</p>
        <ButtonLink href={href} light>
          {contact.cta}
        </ButtonLink>
        <p className="contact-note">{contact.note}</p>
      </div>
    </Section>
  )
}
