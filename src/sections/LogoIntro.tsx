import { useEffect, useState } from 'react'

/* ============================================================
   LogoIntro: full-screen brand loading overlay shown on first paint.

   Covers the viewport in brand indigo while the animated mark draws
   itself in (body wipe + dropping dot, then the wordmark wipes in). Once
   the sequence finishes it fades out and calls onDone so App can unmount
   it and reveal the page underneath.

   Animation timeline (see @keyframes in index.css):
     body    0.85s @ 0.30s
     dot     0.92s @ 1.00s
     wordmark 0.8s @ 1.70s  (ends ~2.5s)
   We hold briefly, then fade. prefers-reduced-motion skips the choreography
   and shows the static mark for a short beat instead.
   ============================================================ */

const FILL = '#F3F3F2' // warm grey mark on the indigo backdrop

// Body path with the floating dot punched out, so the dot can animate on its own.
const MARK_BODY =
  'M94.74,0c-.17,0-.34.02-.5.03-.04,0-.07-.03-.1-.03-2.66,0-16.44,1.38-20.23,17.13-.35-.89-.72-1.77-1.15-2.61-2.37-4.65-5.69-8.23-9.97-10.75-4.28-2.51-9.29-3.77-15.04-3.77-6.14,0-11.37,1.41-15.68,4.23-4.31,2.82-7.38,6.64-9.21,11.45h-.97V1.08H0v82.77h22.96v-47.85c.03-3.56.71-6.6,2.02-9.13,1.31-2.53,3.14-4.46,5.5-5.79,2.35-1.33,5.07-1.99,8.16-1.99,4.6,0,8.21,1.43,10.83,4.28,2.62,2.86,3.92,6.82,3.88,11.88v48.61h22.96V31.15c0-1.46-.07-2.87-.19-4.23.35-2.51,1.34-7.27,4.03-11,.64,7.5,6.92,13.4,14.59,13.4,8.09,0,14.65-6.56,14.65-14.65S102.83,0,94.74,0Z'

export function LogoIntro({ onDone }: { onDone: () => void }) {
  const [hiding, setHiding] = useState(false)
  const [reduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    // Lock scroll while the splash covers the page.
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const fadeAt = reduced ? 650 : 2600
    const fade = setTimeout(() => setHiding(true), fadeAt)
    const done = setTimeout(onDone, fadeAt + 600)

    return () => {
      clearTimeout(fade)
      clearTimeout(done)
      document.body.style.overflow = prev
    }
  }, [onDone, reduced])

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-indigo transition-opacity duration-[600ms] ease-out ${
        hiding ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-[34px]">
        {/* Brand symbol: body + floating dot, layered so each animates independently. */}
        <div className="relative h-[150px] w-[195.7px]">
          <svg
            viewBox="0 0 109.39 83.85"
            className="absolute inset-0 h-full w-full overflow-visible"
            style={{ fill: FILL, animation: reduced ? undefined : 'nrBody 0.85s cubic-bezier(.2,.7,.25,1) 0.3s both' }}
          >
            <defs>
              <mask id="nrNoDot">
                <rect x="-10" y="-10" width="130" height="104" fill="white" />
                <circle cx="94.74" cy="14.65" r="13" fill="black" />
              </mask>
            </defs>
            <path d={MARK_BODY} mask="url(#nrNoDot)" />
          </svg>
          <svg
            viewBox="0 0 109.39 83.85"
            className="absolute inset-0 h-full w-full overflow-visible"
            style={{
              fill: FILL,
              transformOrigin: '84.5% 17.5%',
              animation: reduced ? undefined : 'nrDot 0.92s cubic-bezier(.4,0,.2,1) 1s both',
            }}
          >
            <circle cx="94.74" cy="14.65" r="14.65" />
          </svg>
        </div>

        {/* Wordmark (reuses the shared brand asset). */}
        <img
          src="/logos/wordmark-white.svg"
          alt="Nordic Revisjon"
          className="block h-auto w-[clamp(220px,72vw,340px)]"
          style={{ animation: reduced ? undefined : 'nrWord 0.8s cubic-bezier(.2,.7,.25,1) 1.7s both' }}
        />
      </div>
    </div>
  )
}
