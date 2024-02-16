import type { AbilitiesProps } from './abilities-types'

import { Paragraph } from '@/src/app/[locale]/about-me/components'

import { AbilitiesList } from './components'

export const Abilities = ({ title, data }: AbilitiesProps) => {
  return (
    <div>
      <Paragraph element='span'>{title}</Paragraph>
      <AbilitiesList data={data} />
    </div>
  )
}
