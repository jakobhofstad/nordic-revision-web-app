import { useRef, useState } from 'react'
import { Cluster, Grid, Section, Stack } from '../components/layout'
import footer from '../content/footer.json'
import site from '../content/site.json'
export function Footer() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [legal, setLegal] = useState<'privacy' | 'cookies'>('privacy')
  const openLegal = (kind: 'privacy' | 'cookies') => {
    setLegal(kind)
    dialog.current?.showModal()
  }
  return (
    <Section as="footer" tone="white" pad="pt-12 pb-6" className="site-footer">
      <Grid cols={{ base: 1, md: 2, lg: 4 }} gap="md">
        <div>
          <a href="#top">
            <img
              className="brand-logo"
              src="/logos/lockup-indigo.svg"
              alt={site.company}
              width="245"
              height="47"
            />
          </a>
          <p>{footer.tagline}</p>
        </div>
        <Stack gap="xs">
          <h2>{footer.contactLabel}</h2>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {site.phone && (
            <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
          )}
          {site.city && <span>{site.city}</span>}
        </Stack>
        <Stack gap="xs">
          <h2>{footer.linksLabel}</h2>
          <a href="#tjenester">{site.nav.tjenester}</a>
          <a href="#bransjer">{site.nav.bransjer}</a>
          <a href="#om-oss">{site.nav.omOss}</a>
        </Stack>
        <Stack gap="xs">
          <h2>{footer.socialLabel}</h2>
          {site.linkedin ? (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              {footer.linkedinLabel} ↗
            </a>
          ) : (
            <span>
              {footer.linkedinLabel}{' '}
              <small>({footer.linkedinPlaceholder})</small>
            </span>
          )}
        </Stack>
      </Grid>
      <Cluster justify="between" className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.legalName}. {footer.copyright}
          {site.orgNr && ` Org.nr. ${site.orgNr}`}
        </span>
        <Cluster>
          <button onClick={() => openLegal('privacy')}>
            {footer.privacyLabel}
          </button>
          <button onClick={() => openLegal('cookies')}>
            {footer.cookiesLabel}
          </button>
        </Cluster>
      </Cluster>
      <dialog
        ref={dialog}
        className="legal-dialog"
        aria-labelledby="legal-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close()
        }}
      >
        <form method="dialog">
          <button className="dialog-close" aria-label="Lukk">
            ×
          </button>
        </form>
        <h2 id="legal-title">
          {legal === 'privacy' ? footer.privacyTitle : footer.cookiesTitle}
        </h2>
        <p>{legal === 'privacy' ? footer.privacyBody : footer.cookiesBody}</p>
        <a className="text-link" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </dialog>
    </Section>
  )
}
