import { Divider, Stack } from '@mui/material'
import { useTranslations } from 'next-intl'

import { Header } from '@/src/components'
import { Pages } from '@/src/enums'

import { Abilities, Education, Highlight, MyIcon, Paragraph, ProfessionalExperience, Section } from './components'

export default function AboutMe() {
  const translation = useTranslations('pages.about-me.content')

  return (
    <>
      <Header currentPage={Pages.ABOUT_ME} />
      <div className='flex flex-col mt-8 mb-4 px-6 max-md:w-full max-md:mx-auto'>
        <div className='grid grid-cols-3 gap-20 max-lg:flex max-lg:flex-col max-lg:gap-10'>
          <Stack className='col-span-2' direction='column' spacing={1.5}>
            <Section title={translation('about-me.title')}>
              <Paragraph indent>
                {translation.rich('about-me.paragraph', {
                  Highlight: text => <Highlight>{text}</Highlight>
                })}
              </Paragraph>
            </Section>
            <Section title={translation('front-end.title')}>
              <Paragraph indent>
                {translation.rich('front-end.paragraph', {
                  Highlight: text => <Highlight>{text}</Highlight>
                })}
              </Paragraph>
              <Abilities title={translation('abilities')} data={['Next.Js', 'Typescript', 'Javascript', 'TailwindCss', 'HTML5', 'CSS3']} />
            </Section>
            <Section title={translation('back-end.title')}>
              <Paragraph indent>
                {translation.rich('back-end.paragraph', {
                  Highlight: text => <Highlight>{text}</Highlight>
                })}
              </Paragraph>
              <Abilities title={translation('abilities')} data={['Next.Js', 'PHP', 'Node.Js', 'MySQL']} />
            </Section>
            <Section title={translation('mobile.title')}>
              <Paragraph indent>
                {translation.rich('mobile.paragraph', {
                  Highlight: text => <Highlight>{text}</Highlight>
                })}
              </Paragraph>
              <Abilities title={translation('abilities')} data={['React Native']} />
            </Section>
          </Stack>
          <aside>
            <div className='flex flex-col'>
              <Section title={translation('technology')}>
                <div className='grid grid-cols-4 my-8 gap-y-5 items-center justify-items-center max-sm:grid-cols-3'>
                  <MyIcon tooltip='Typescript' icon='typescript' />
                  <MyIcon tooltip='Javascript' icon='javascript' />
                  <MyIcon tooltip='HTML5' icon='html5' />
                  <MyIcon tooltip='CSS3' icon='css3' />
                  <MyIcon tooltip='Tailwind CSS' icon='tailwind' />
                  <MyIcon tooltip='MySQL & PostgreSQL' icon='mysql' />
                  <MyIcon tooltip='React & React Native' icon='react' />
                  <MyIcon tooltip='Next.Js' icon='nextjs' />
                  <MyIcon tooltip='Node.Js' icon='node' />
                  <MyIcon tooltip='Git' icon='git' />
                  <MyIcon tooltip='PHP' icon='php' />
                </div>
              </Section>
              <Section title={translation('languages.title')}>
                <Stack direction='column' spacing={1} className='mt-3'>
                  <Highlight>{translation('languages.portuguese')}</Highlight>
                  <Highlight>{translation('languages.english')}</Highlight>
                </Stack>
              </Section>
            </div>
          </aside>
        </div>
        <Divider orientation='horizontal' className='mt-4 mb-4 bg-slate-900 dark:bg-slate-300' />
        <Section title={translation('professional-experience.title')}>
          <ProfessionalExperience
            title={translation('professional-experience.datamex-by-nstech.title')}
            role={translation('professional-experience.datamex-by-nstech.role')}
            date={['02/2024']}
            description={translation.rich('professional-experience.datamex-by-nstech.description', {
              Highlight: text => <Highlight>{text}</Highlight>
            })}
          />
          <ProfessionalExperience
            title={translation('professional-experience.datamex.title')}
            role={translation('professional-experience.datamex.role')}
            date={['11/2021', '07/2023']}
            description={translation.rich('professional-experience.datamex.description', {
              Highlight: text => <Highlight>{text}</Highlight>
            })}
          />
        </Section>
        <Divider orientation='horizontal' className='mt-4 mb-4 bg-slate-900 dark:bg-slate-300' />
        <Section title={translation('education.title')}>
          <Education
            institution={translation('education.ifrs.title')}
            course={translation('education.ifrs.course')}
            period={['2017', '2021']}
          />
          <Education
            institution={translation('education.estacio.title')}
            course={translation('education.estacio.course')}
            period={['2023', '2027']}
          />
        </Section>
      </div>
    </>
  )
}
