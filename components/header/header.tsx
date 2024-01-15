import type { HeaderProps } from './header-types'

import { Pages } from '@/enums'

import { DarkModeSwitch, LinkHeader } from './components'

export const Header = ({ currentPage }: HeaderProps) => {
  return (
    <header className='flex justify-end'>
      <LinkHeader href='/' text='Página inicial' selected={currentPage === Pages.HOME} />
      <LinkHeader href='/about-me' text='Sobre mim' selected={currentPage === Pages.ABOUT_ME} />
      <LinkHeader href='/projects' text='Projetos' selected={currentPage === Pages.PROJECTS} />
      <DarkModeSwitch />
    </header>
  )
}
