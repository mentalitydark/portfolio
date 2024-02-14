import type { SVGProps } from 'react'

export interface MyIconProps {
  tooltip: string
  icon: TIcon
}

type TIcon = 'css3' | 'git' | 'html5' | 'javascript' | 'mysql' | 'nextjs' | 'node' | 'php' | 'react' | 'tailwind' | 'typescript'

export type IconsMapped = {
  [x in TIcon]: (props: SVGProps<SVGSVGElement>) => React.JSX.Element
}
