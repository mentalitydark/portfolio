import type { ReactNode } from 'react'

export interface ProfessionalExperienceProps {
  title: string
  role: string
  date: [string, string?]
  description: ReactNode
}
