'use client'

import { Divider, Stack } from '@mui/material'

import { Header } from '@/src/components'
import { Pages } from '@/src/enums'

import { Section, Highlight, Paragraph, Abilities, MyIcon, Education } from './components'

export default function AboutMe() {
  return (
    <>
      <Header currentPage={Pages.ABOUT_ME} />
      <div className='flex flex-col mt-8 px-6 max-md:w-full max-md:mx-auto'>
        <div className='grid grid-cols-3 gap-20 max-lg:flex max-lg:flex-col max-lg:gap-10'>
          <Stack className='col-span-2' direction='column' spacing={1.5}>
            <Section title='Sobre mim'>
              <Paragraph indent>
                Tenho uma paixão intensa pela programação desde o momento em que me envolvi com ela pela primeira vez durante meu período no <Highlight>IFRS</Highlight>.
                Desde então, tenho dedicado minha energia à transformação de ideias em realidade, sempre em busca de novos desafios para aprimorar minhas habilidades.
                Atualmente, estou matriculado no curso de <Highlight>Engenharia de Software</Highlight>, e meu grande sonho é tornar-me um desenvolvedor de jogos.
                Este caminho acadêmico e profissional tem sido uma jornada incrível, impulsionando minha determinação em alcançar meus objetivos na área da programação de jogos.
              </Paragraph>
            </Section>
            <Section title='Desenvolvedor front-end'>
              <Paragraph indent>
                Minha principal atuação atual concentra-se na área de front-end.
                Desde o início do meu ensino técnico até o momento presente, tenho dedicado tempo contínuo ao estudo e à programação na interface do usuário.
                Conto com uma variedade de projetos, tanto utilizando frameworks/libs quanto sem sua utilização.
              </Paragraph>
              <Abilities
                title='Minhas principais tecnologias são:'
                data={[
                  'Next.Js',
                  'Typescript',
                  'Javascript',
                  'TailwindCss',
                  'HTML5',
                  'CSS3',
                ]}
              />
            </Section>
            <Section title='Desenvolvedor back-end'>
              <Paragraph indent>
                Embora meus estudos em back-end não sejam tão aprofundados quanto os de front-end, continuo me dedicando ao aprendizado constante, explorando novas tecnologias nesta área.
                Minha formação no IFRS abrange tanto front-end quanto back-end, proporcionando-me conhecimentos sólidos em aspectos como banco de dados, APIs e afins.
              </Paragraph>
              <Abilities
                title='Minhas principais tecnologias são:'
                data={['Next.Js', 'PHP', 'Node.Js', 'MySQL']}
              />
            </Section>
            <Section title='Desenvolvedor mobile'>
              <Paragraph indent>
                Embora eu não tenha dedicado tanto tempo ao desenvolvimento de aplicativos móveis, adquiri conhecimentos sólidos em React Native através da minha experiência profissional.
              </Paragraph>
              <Abilities
                title='Minha principal tecnologia é:'
                data={['React Native']}
              />
            </Section>
          </Stack>
          <aside>
            <div className='flex flex-col'>
              <Section title='Tecnologias'>
                <div className='grid grid-cols-4 my-8 gap-y-5 items-center justify-items-center max-sm:grid-cols-3'>
                  <MyIcon tooltip='Typescript' icon='typescript' width={70 * 0.6} height={70 * 0.6} />
                  <MyIcon tooltip='Javascript' icon='javascript' width={70 * 0.6} height={70 * 0.6} />
                  <MyIcon tooltip='HTML5' icon='html5' width={70 * 0.6} height={70 * 0.6} />
                  <MyIcon tooltip='CSS3' icon='css3' width={70 * 0.6} height={70 * 0.6} />
                  <MyIcon tooltip='Tailwind CSS' icon='tailwind' width={70 * 0.6} height={70 * 0.6} />
                  <MyIcon tooltip='MySQL e PostgreSQL' icon='mysql' width={70 * 0.6} height={70 * 0.6} />
                  <MyIcon tooltip='React e React Native' icon='react' width={70 * 0.6} height={70 * 0.6} />
                  <MyIcon tooltip='Next.Js' icon='nextjs' width={70 * 0.6} height={70 * 0.6} />
                  <MyIcon tooltip='Node.Js' icon='node' width={70 * 0.6} height={70 * 0.6} />
                  <MyIcon tooltip='Git' icon='git' width={70 * 0.6} height={70 * 0.6} />
                  <MyIcon tooltip='PHP' icon='php' width={70 * 0.6} height={70 * 0.6} />
                </div>
              </Section>
              <Section title='Idiomas'>
                <Stack direction='column' spacing={1} className='mt-3'>
                  <Highlight>Português: Nativo</Highlight>
                  <Highlight>Inglês: Básico</Highlight>
                </Stack>
              </Section>
            </div>
          </aside>
        </div>
        <Divider orientation='horizontal' className='mt-4 mb-4' />
        <Section title='Experiência profissional'>
          <div>
            <div className='flex flex-col'>
              <span className='text-slate-900 dark:text-slate-300 font-semibold text-2xl'>Datamex Tecnologia da Informação LTDA</span>
              <span className='italic text-slate-600 dark:text-slate-300'>Programador Júnior - 11/2021 - 07/2023</span>
            </div>
            <Paragraph indent>
              Desempenhava atividades de programação utilizando <Highlight>Javascript</Highlight>/<Highlight>Typescript</Highlight> e <Highlight>PHP</Highlight>.
              Grande parte do sistema era feito utilizando um framework, em <Highlight>PHP</Highlight>, interno da empresa.
              Havia um subproduto que estava em desenvolvimento utilizando <Highlight>Next.Js</Highlight>.
              Além disso, utilizava <Highlight>React Native</Highlight> para o desenvolvimento do aplicativo mobile com conexão via API utilizando <Highlight>PHP</Highlight>.
              Quando necessário, criar, ou editar, tabelas do banco de dados <Highlight>MySQL</Highlight>.
            </Paragraph>
          </div>
        </Section>
        <Divider orientation='horizontal' className='mt-4 mb-4' />
        <Section title='Formação'>
          <Education
            institution='Instituto Federal do Rio Grande do Sul Campus Rio Grande'
            course='Informática para Internet'
            period={['2017', '2021']}
          />
          <Education
            institution='Estácio'
            course='Engenharia de Software'
            period={['2023', '2027']}
          />
        </Section>
      </div>
    </>
  )
}
