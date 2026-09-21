import { ArrowRight } from './icons'
export function ServiceCard({
  title,
  body,
  detail,
  image,
  imageAlt,
  moreLabel,
}: {
  title: string
  body: string
  detail: string
  image: string
  imageAlt: string
  moreLabel: string
}) {
  return (
    <article className="service-card">
      <img src={image} alt={imageAlt} width="600" height="390" loading="lazy" />
      <div className="service-copy">
        <h3>{title}</h3>
        <p>{body}</p>
        <details>
          <summary aria-label={`${moreLabel}: ${title}`}>
            <span>{moreLabel}</span>
            <ArrowRight />
          </summary>
          <p>{detail}</p>
        </details>
      </div>
    </article>
  )
}
