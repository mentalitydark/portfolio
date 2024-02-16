import type { Icon, IconProps } from '@mui/material'
import type { ReactElement } from 'react'

export interface SocialMediaButtonProps {
  href: string
  text: string
  icon: ReactElement<IconProps, typeof Icon>
}
