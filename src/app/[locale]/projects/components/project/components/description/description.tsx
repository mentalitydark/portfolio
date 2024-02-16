import type { DescriptionProps } from './description-types'

export const Description = ({ text }: DescriptionProps) => {
  return (
    <p className='text-justify text-slate-900 mt-4 dark:text-slate-300'>{text}</p>
  )
}
