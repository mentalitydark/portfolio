'use client'

import { Divider, Stack } from '@mui/material'
import { v4 } from 'uuid'

import type { AbilitiesListProps } from './abilities-list-types'

import { Highlight } from '@/src/app/[locale]/about-me/components'

export const AbilitiesList = ({ data }: AbilitiesListProps) => {
  return (
    <Stack display='inline-flex' direction='row' spacing={.5} divider={<Divider orientation='vertical' flexItem className='bg-slate-900 dark:bg-slate-300' />} ml={1} flexWrap='wrap'>
      {data.map(ability => <Highlight key={v4()}>{ability}</Highlight>)}
    </Stack>
  )
}
