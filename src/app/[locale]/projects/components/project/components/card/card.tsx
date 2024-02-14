import type { CardProps } from './card-types'

export const Card = ({ children }: CardProps) => {
  return (
    <div className='grid border border-slate-900 rounded-md p-2 shadow-md dark:border-slate-400'>
      {children}
    </div>
  )
}
