import type { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'


export interface ProjectProps {
  title: string
  children: ReactNode
  image: StaticImageData
  tags: string[]
  view_code_href: string
  view_project_href?: string
}
