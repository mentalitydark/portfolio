import { getTranslations } from 'next-intl/server'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const translate = await getTranslations({ locale, namespace: 'pages.about-me.metadata' })

  return {
    title: translate('title')
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
