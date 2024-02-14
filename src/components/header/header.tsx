import { useTranslations } from 'next-intl'

import type { HeaderProps } from './header-types'

import { Pages } from '@/src/enums'

import { LanguageSelect, LinkHeader, DarkModeSwitch } from './components'

export const Header = ({ currentPage }: HeaderProps) => {
  const translate = useTranslations('components.header')

  return (
    <header className='flex justify-end max-[375px]:flex-col max-[375px]:items-center max-[375px]:w-full min-[375px]:pr-4'>
      <div className='flex'>
        <LinkHeader href='/' text={translate('home')} selected={currentPage === Pages.HOME} />
        <LinkHeader href='/about-me' text={translate('about-me')} selected={currentPage === Pages.ABOUT_ME} />
        <LinkHeader href='/projects' text={translate('projects')} selected={currentPage === Pages.PROJECTS} />
      </div>
      <div className='flex items-center max-[375px]:justify-evenly max-[375px]:w-full max-[375px]:mt-4'>
        <DarkModeSwitch />
        <LanguageSelect />
      </div>
    </header>
  )
}
