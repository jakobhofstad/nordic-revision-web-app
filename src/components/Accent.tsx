import type { ReactNode } from 'react'

/* ---------- highlight one word inside a content string ----------
   Editors write the full sentence in the CMS and name the word to accent;
   the section decides what "accent" looks like via render. Word missing
   from the text renders the sentence untouched. */
export function Accent({ text, word, render }: { text: string; word: string; render: (word: string) => ReactNode }) {
  const i = word ? text.indexOf(word) : -1
  if (i < 0) return <>{text}</>
  return (
    <>
      {text.slice(0, i)}
      {render(word)}
      {text.slice(i + word.length)}
    </>
  )
}
