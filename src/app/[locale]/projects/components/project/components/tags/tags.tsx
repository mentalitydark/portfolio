'use client'

import { Divider, Stack } from '@mui/material'
import { v4 } from 'uuid'

import type { TagsProps } from './tags-types'

export const Tags = ({ data }: TagsProps) => {
  return (
    <Stack direction='row' className='text-green-500 font-semibold mt-4' flexWrap='wrap' spacing={1} justifyContent='center' alignItems='center' divider={<Divider orientation='vertical' flexItem className='bg-slate-900 dark:bg-slate-300' />}>
      {data.map(tag => <span key={v4()}>{tag}</span>)}
    </Stack>
  )
}
