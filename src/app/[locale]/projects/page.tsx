
import { useTranslations } from 'next-intl'

import apiNodeImage from '@/public/image/api-node.png'
import estagioImage from '@/public/image/estagio.png'
import multiplayerImage from '@/public/image/multiplayer-game.png'
import pokeDexImage from '@/public/image/pokedex.png'
import quimicaImage from '@/public/image/quimica.png'
import snakeImage from '@/public/image/snake.png'
import { Header } from '@/src/components'
import { Pages } from '@/src/enums'

import { Project } from './components'

export default function Projects() {
  const translation = useTranslations('pages.projects.content')

  return (
    <>
      <Header currentPage={Pages.PROJECTS} />
      <div className='w-full grid gap-6 px-4 my-4 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
        <Project
          title={translation('projects.pokedex.title')}
          description={translation('projects.pokedex.description')}
          image={pokeDexImage}
          tags={['Next.Js', 'Poke API', 'Tailwind Css', 'Material Ui']}
          view_code_href='https://github.com/mentalitydark/pokedex-next'
          view_project_href='https://pokedex-next-three.vercel.app/pokemons'
        />
        <Project
          title={translation('projects.multiplayer-game.title')}
          description={translation('projects.multiplayer-game.description')}
          image={multiplayerImage}
          tags={['Javascript', 'Express.Js', 'Socket.io', 'Tailwind Css']}
          view_code_href='https://github.com/mentalitydark/multiplayer-game'
          view_project_href='https://multiplayer-game-cuak.onrender.com/'
        />
        <Project
          title={translation('projects.ifrs-last-job.title')}
          description={translation('projects.ifrs-last-job.description')}
          image={estagioImage}
          tags={['Javascript', 'HTML5', 'CSS3']}
          view_code_href='https://github.com/mentalitydark/estagio'
          view_project_href='https://mentalitydark.github.io/estagio/'
        />
        <Project
          title={translation('projects.periodic-table.title')}
          description={translation('projects.periodic-table.description')}
          image={quimicaImage}
          tags={['Javascript', 'HTML5', 'CSS3']}
          view_code_href='https://github.com/mentalitydark/quimica2c'
          view_project_href='https://mentalitydark.github.io/quimica2c/'
        />
        <Project
          title={translation('projects.snake-game.title')}
          description={translation('projects.snake-game.description')}
          image={snakeImage}
          tags={['Next.Js', 'Electron', 'Typescript', 'CSS3']}
          view_code_href='https://github.com/mentalitydark/game-snake-nextron'
          view_project_href='https://github.com/mentalitydark/game-snake-nextron/releases/tag/v1.0.0'
        />
        <Project
          title={translation('projects.api-nodejs.title')}
          description={translation('projects.api-nodejs.description')}
          image={apiNodeImage}
          tags={['Express.Js', 'Typescript', 'MongoDB', 'RFC 7807']}
          view_code_href='https://github.com/mentalitydark/nodejs-api'
        />
      </div>
    </>
  )
}
