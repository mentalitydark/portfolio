import { Inter } from 'next/font/google'

import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Página inicial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className=''>
      <body className={inter.className}>
        <main className='w-4/5 mx-auto flex flex-col mt-5 max-lg:w-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
