import type { EducationProps } from './education-types'

export const Education = ({ institution, period, course }: EducationProps) => {
  return (
    <div className='flex flex-col my-4'>
      <span className='text-slate-900 dark:text-slate-300 font-semibold text-2xl'>{course}</span>
      <span className='italic text-slate-600 dark:text-slate-300'>{institution} - {period.join(' - ')}</span>
    </div>
  )
}
