import { EmailOutlined, GitHub, LinkedIn, WhatsApp } from '@mui/icons-material'
import { Box } from '@mui/material'
import Image from 'next/image'

import { Header } from '@/components'
import { Pages } from '@/enums'
import HomePageSVG from '@/public/svg/home-developer.svg'

import { SocialMediaButton } from './components'

export default function Home() {
  return (
    <>
      <Header currentPage={Pages.HOME} />
      <div className='flex justify-evenly items-center mt-4 max-md:w-4/5 max-md:mx-auto'>
        <Box display='flex' flexDirection='column'>
          <Box display='flex' flexDirection='column'>
            <span className='text-slate-900 text-3xl dark:text-slate-300'>Olá,</span>
            <span className='text-slate-900 text-3xl dark:text-slate-300'>meu nome é</span>
            <span className='text-green-500 text-5xl font-semibold'>Guilherme P. de Oliveira.</span>
            <span className='text-slate-400 text-lg italic'>Sou desenvolvedor Fullstack</span>
          </Box>
          <div className='grid grid-cols-2 gap-4 mt-12 max-md:grid-cols-1'>
            <SocialMediaButton text='Github' icon={<GitHub />} href='https://github.com/mentalitydark' />
            <SocialMediaButton text='Linkedin' icon={<LinkedIn />} href='https://www.linkedin.com/in/guilherme-oliveira-3a87ba1a3/' />
            <SocialMediaButton text='WhatsApp' icon={<WhatsApp />} href='https://wa.me/+555391088415' />
            <SocialMediaButton text='E-mail' icon={<EmailOutlined />} href='mailto:guilherme.oliveira.01@outlook.com' />
          </div>
        </Box>
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
