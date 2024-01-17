import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Projetos criados por Guilherme Oliveira',
}

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children
}
