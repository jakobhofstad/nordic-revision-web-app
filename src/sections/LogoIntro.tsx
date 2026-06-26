import { useEffect, useState } from 'react'

/* ============================================================
   LogoIntro: full-screen brand loading overlay shown on first paint.

   Covers the viewport in brand indigo while the animated mark draws
   itself in (body wipe + dropping dot, then the wordmark wipes in). Once
   the sequence finishes it fades out and calls onDone so App can unmount
   it and reveal the page underneath.

   Animation timeline (see @keyframes in index.css):
     body    0.6s @ 0.12s
     dot     0.55s @ 0.55s
     wordmark 0.5s @ 0.95s  (ends ~1.45s)
   We hold briefly, then fade. prefers-reduced-motion skips the choreography
   and shows the static mark for a short beat instead.
   ============================================================ */

const FILL = '#312783' // indigo mark inside the light glass splash

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

    const fadeAt = reduced ? 500 : 1450
    const fade = setTimeout(() => setHiding(true), fadeAt)
    const done = setTimeout(onDone, fadeAt + 500)

    return () => {
      clearTimeout(fade)
      clearTimeout(done)
      document.body.style.overflow = prev
    }
  }, [onDone, reduced])

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-warm-grey transition-opacity duration-[500ms] ease-out ${
        hiding ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      {/* Same soft purple wash as the hero, blurred through the glass card. */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-3/4 w-3/4 -translate-y-1/4 translate-x-1/4 rounded-full bg-lilac/35 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 -translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-tint blur-[80px]" />
      </div>

      <div className="glass-panel relative flex flex-col items-center gap-[clamp(26px,5vw,34px)] rounded-[20px] px-[clamp(40px,9vw,76px)] py-[clamp(38px,7vw,58px)] shadow-card">
        {/* Brand symbol: body + floating dot, layered so each animates independently. */}
        <div className="relative h-[clamp(96px,22vw,140px)] w-[clamp(125px,29vw,182.6px)]">
          <svg
            viewBox="0 0 109.39 83.85"
            className="absolute inset-0 h-full w-full overflow-visible"
            style={{ fill: FILL, animation: reduced ? undefined : 'nrBody 0.6s cubic-bezier(.2,.7,.25,1) 0.12s both' }}
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
              animation: reduced ? undefined : 'nrDot 0.55s cubic-bezier(.4,0,.2,1) 0.55s both',
            }}
          >
            <circle cx="94.74" cy="14.65" r="14.65" />
          </svg>
        </div>

        {/* Wordmark (reuses the shared brand asset). */}
        <img
          src="/logos/wordmark-indigo.svg"
          alt="Nordic Revisjon"
          className="block h-auto w-[clamp(200px,60vw,300px)]"
          style={{ animation: reduced ? undefined : 'nrWord 0.5s cubic-bezier(.2,.7,.25,1) 0.95s both' }}
        />
      </div>
    </div>
  )
}
