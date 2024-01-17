'use client'

import { Tooltip } from '@mui/material'
import { createElement } from 'react'

import type { MyIconProps, IconsMapped } from './my-icon-types'

import {
  Css3,
  Git,
  Html5,
  Javascript,
  MySql,
  Nextjs,
  Node,
  React as ReactIcon,
  Php,
  Tailwind,
  Typescript,
} from '@/src/components/icons'

export const MyIcon = ({ tooltip, icon, width, height }: MyIconProps) => {
  const Icons: IconsMapped = {
    css3: Css3,
    git: Git,
    html5: Html5,
    javascript: Javascript,
    mysql: MySql,
    nextjs: Nextjs,
    node: Node,
    react: ReactIcon,
    php: Php,
    tailwind: Tailwind,
    typescript: Typescript,
  }

  const Element = createElement(Icons[icon], {
    width,
    height,
    className: 'text-green-500',
  })

  return (
    <Tooltip title={tooltip} placement='top' arrow><div>{Element}</div></Tooltip>
  )
}
