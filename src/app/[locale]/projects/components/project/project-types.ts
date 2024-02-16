import type { StaticImageData } from 'next/image'

export interface ProjectProps {
  title: string
  description: string
  image: StaticImageData
  tags: string[]
  view_code_href: string
  view_project_href?: string
}
