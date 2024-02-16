import type { ProfessionalExperienceProps } from './professional-experience-types'

import { Paragraph } from '@/src/app/[locale]/about-me/components'

export const ProfessionalExperience = ({ title, role, date, description }: ProfessionalExperienceProps) => {
  return (
    <div className='my-4'>
      <div className='flex flex-col'>
        <span className='text-slate-900 dark:text-slate-300 font-semibold text-2xl'>{title}</span>
        <span className='italic text-slate-600 dark:text-slate-300 text-md'>{role} - {date[0]} - {date[1] ?? '----'}</span>
      </div>
      <Paragraph indent>
        {description}
      </Paragraph>
    </div>
  )
}
