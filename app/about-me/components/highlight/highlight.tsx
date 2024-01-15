import type { ReactNode } from 'react'

export const Highlight = ({ children }: { children: ReactNode }) => {
  return (
    <span className='font-semibold dark:text-slate-300'>
      {children}
    </span>
  )
}
