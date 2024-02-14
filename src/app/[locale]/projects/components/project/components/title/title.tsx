import type { TitleProps } from './title-types'

export const Title = ({ text }: TitleProps) => {
  return (
    <p className='text-center text-slate-900 font-semibold text-2xl mb-4 dark:text-slate-300'>
      {text}
    </p>
  )
}
