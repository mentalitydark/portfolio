import type { ReactNode } from 'react'

export interface ParagraphProps {
  children: ReactNode
  indent?: boolean
  element?: 'p'|'span'
}
