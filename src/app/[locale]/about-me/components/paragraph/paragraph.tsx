import { createElement } from 'react'

import type { ParagraphProps } from './paragraph-types'

export const Paragraph = ({ children, indent, element = 'p' }: ParagraphProps) => {
  const className= `text-justify mt-3 text-slate-900 dark:text-slate-300 ${indent ? 'indent-4' : ''}`

  return createElement(
    element,
    { className },
    children
  )
}
