'use client'

import { Code, Visibility } from '@mui/icons-material'
import { Divider, Stack, Tooltip } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { v4 } from 'uuid'

import type { ProjectProps } from './project-types'

export const Project = ({ title, image, children, tags, view_code_href, view_project_href }: ProjectProps) => {
  return (
    <div className='grid border border-slate-900 rounded-md p-2 shadow-md dark:border-slate-400'>
      <p className='text-center text-slate-900 font-semibold text-2xl mb-4 dark:text-slate-300'>
        {title}
      </p>
      <Image
        src={image}
        alt={`Image of the ${title} project`}
        className='border border-slate-200 rounded-md'
      />
      <p className='text-justify text-slate-900 mt-4 dark:text-slate-300'>{children}</p>
      <Stack direction='row' className='text-green-500 font-semibold mt-4' flexWrap='wrap' spacing={1} justifyContent='center' divider={<Divider orientation='vertical' flexItem />}>
        {tags.map(tag => <span key={v4()}>{tag}</span>)}
      </Stack>
      <div className='flex flex-row justify-evenly mt-4'>
        <Tooltip title='Código' placement='top' arrow>
          <Link target='_blank' href={view_code_href} className='w-1/4 flex items-center justify-center py-2 border-slate-900 border rounded-sm text-green-500 dark:border-slate-300'>
            <Code />
          </Link>
        </Tooltip>
        {view_project_href && (
          <Tooltip title='Projeto rodando' placement='top' arrow>
            <Link target='_blank' href={view_code_href} className='w-1/4 flex items-center justify-center py-2 border-slate-900 border rounded-sm text-green-500 dark:border-slate-300'>
              <Visibility />
            </Link>
          </Tooltip>
        )}
      </div>
    </div>
  )
}
