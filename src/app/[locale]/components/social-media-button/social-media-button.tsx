import Link from 'next/link'
import { cloneElement } from 'react'

import type { SocialMediaButtonProps } from './social-media-button-types'
import type { IconProps } from '@mui/material'

export const SocialMediaButton = ({ href, icon, text }: SocialMediaButtonProps) => {

  const Icon = cloneElement<IconProps>(icon, { fontSize: 'large' })

  return (
    <Link
      href={href}
      target='_blank'
      className='flex flex-row p-2 items-center cursor-pointer
    border-slate-900 rounded-md border-2
    text-slate-900 transition
    dark:border-slate-300 dark:text-slate-300
    dark:hover:border-green-500 dark:hover:text-green-500
    hover:border-green-500 hover:text-green-500'
    >
      {Icon}
      <span className='font-semibold ml-4'>{text}</span>
    </Link>
  )
}
