import Link from 'next/link'

import type { LinkProps } from './link-header-types'

export const LinkHeader = ({ text, href, selected }: LinkProps) => {

  const color = selected ? 'text-green-500 dark:text-green-500' : 'text-slate-900 dark:text-slate-300'

  return (
    <Link href={href} className={`${color} font-semibold mx-4 hover:font-bold`}>{text}</Link>
  )
}
