import ImageNext from 'next/image'

import type { ImageProps } from './image-types'

export const Image = (props: ImageProps) => {
  return (
    <ImageNext
      {...props}
      className='border border-slate-200 rounded-md'
    />
  )
}
