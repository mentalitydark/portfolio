'use client'

import { Divider, Stack } from '@mui/material'
import { v4 } from 'uuid'

import type { AbilitiesProps } from './abilities-types'

import { Highlight, Paragraph } from '@/app/about-me/components'

export const Abilities = ({ title, data }: AbilitiesProps) => {
  return (
    <>
      <Paragraph element='span'>{title}</Paragraph>
      <Stack display='inline-flex' direction='row' spacing={.5} divider={<Divider orientation='vertical' flexItem />} ml={1} flexWrap='wrap' >
        {data.map(ability => <Highlight key={v4()}>{ability}</Highlight>)}
      </Stack>
    </>
  )
}
