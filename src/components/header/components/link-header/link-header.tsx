'use client'

import type { LinkHeaderProps } from './link-header-types'

import { Link } from '@/src/navigation'

export const LinkHeader = ({ text, selected, href }: LinkHeaderProps) => {
  const color = selected ? 'text-green-500 dark:text-green-500' : 'text-slate-900 dark:text-slate-300'

  return (
    <Link href={{ pathname: href }} replace className={`${color} font-semibold mx-4 hover:font-bold`}>
      {text}
    </Link>
  )
}
