import Link from 'next/link'

import type { ButtonProps } from './button-types'

export const Button = ({ href, icon }: ButtonProps) => {
  return (
    <Link target='_blank' href={href} className='w-1/4 h-10 flex items-center justify-center py-2 border-slate-900 border rounded-sm text-green-500 dark:border-slate-300'>
      {icon}
    </Link>
  )
}
