import { EmailOutlined, GitHub, LinkedIn, WhatsApp } from '@mui/icons-material'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import HomePageSVG from '@/public/svg/home-developer.svg'
import { Header } from '@/src/components'
import { Pages } from '@/src/enums'

import { SocialMediaButton } from './components'


export default function Home() {
  const translations = useTranslations('pages.home.content')

  return (
    <>
      <Header currentPage={Pages.HOME} />
      <div className='flex justify-evenly items-center mt-4 max-md:w-4/5 max-md:mx-auto'>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <span className='text-slate-900 text-3xl dark:text-slate-300'>{translations('firstText')}</span>
            <span className='text-slate-900 text-3xl dark:text-slate-300'>{translations('secondText')}</span>
            <span className='text-green-500 text-5xl font-semibold'>{translations('name')}</span>
            <span className='text-slate-400 text-lg italic'>{translations('job')}</span>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-12 max-md:grid-cols-1'>
            <SocialMediaButton text='Github' icon={<GitHub />} href='https://github.com/mentalitydark' />
            <SocialMediaButton text='Linkedin' icon={<LinkedIn />} href='https://www.linkedin.com/in/guilherme-oliveira-3a87ba1a3/' />
            <SocialMediaButton text='WhatsApp' icon={<WhatsApp />} href='https://wa.me/+555391088415' />
            <SocialMediaButton text='E-mail' icon={<EmailOutlined />} href='mailto:guilherme.oliveira.01@outlook.com' />
          </div>
        </div>
        <Image
          className='max-xl:hidden' 
          priority
          src={HomePageSVG}
          alt='Image Home Page'
          width={668}
        />
      </div>
    </>
  )
}
