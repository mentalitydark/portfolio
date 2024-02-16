import { Inter } from 'next/font/google'
import { getTranslations } from 'next-intl/server'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const translate = await getTranslations({ locale, namespace: 'pages.home.metadata' })

  return {
    title: translate('title')
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className=''>
      <body className={inter.className}>
        <main className='w-4/5 mx-auto flex flex-col mt-5 max-lg:w-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
