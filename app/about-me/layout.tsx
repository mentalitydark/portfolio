import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Sobre mim',
  description: 'Página sobre Guilherme Oliveira',
}

export default function AboutMeLayout({ children }: { children: ReactNode }) {
  return children
}
