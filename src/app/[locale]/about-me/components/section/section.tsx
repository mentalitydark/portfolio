import type { SectionProps } from './section-types'

export const Section = ({ title, children }: SectionProps) => {
  return (
    <div>
      <span className='text-5xl drop-shadow text-green-500 font-semibold max-[500px]:text-3xl'>{title}</span>
      {children}
    </div>
  )
}
