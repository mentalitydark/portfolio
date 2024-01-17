'use client'

import { Header } from '@/src/components'
import { Pages } from '@/src/enums'
import apiNodeImage from '@/public/image/api-node.png'
import estagioImage from '@/public/image/estagio.png'
import multiplayerImage from '@/public/image/multiplayer-game.png'
import pokeDexImage from '@/public/image/pokedex.png'
import quimicaImage from '@/public/image/quimica.png'
import snakeImage from '@/public/image/snake.png'

import { Project } from './components'

export default function Projects() {
  return (
    <>
      <Header currentPage={Pages.PROJECTS} />
      <div className='w-full grid gap-6 px-4 my-4 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
        <Project
          title='Pokedex'
          image={pokeDexImage}
          tags={['Next.Js', 'Poke API', 'Tailwind Css', 'Material Ui']}
          view_code_href='https://github.com/mentalitydark/pokedex-next'
          view_project_href='https://pokedex-next-three.vercel.app/pokemons'
        >
          Um site simples que lista todos pokemons separados por geração.
          Tive o desejo de criar esse projeto por ser algo que muitos desenvolvedores criam no seu início.
          Algo que fiz para não deixar tão básico e simples foi a possibilidade de inspecionar o pokemon ao clicar nele.
          Com essa funcionalidade, pude testar o recurso de rota dinâmica do NextJs.
        </Project>
        <Project
          title='Jogo multiplayer'
          image={multiplayerImage}
          tags={['Javascript', 'Express.Js', 'Socket.io', 'Tailwind Css']}
          view_code_href='https://github.com/mentalitydark/multiplayer-game'
          view_project_href='https://multiplayer-game-cuak.onrender.com/'
        >
          Criei esse jogo para aprimorar minhas habilidades com o NodeJs e Websocket.
          O jogo consiste em ser uma competição de quem consegue adquirir mais frutas.
          Ainda estou com ideias para implementar e deixar cada vez melhor.
          Uma das minhas metas é adicionar um chat.
        </Project>
        <Project
          title='Finalização do curso do IFRS'
          image={estagioImage}
          tags={['Javascript', 'HTML5', 'CSS3']}
          view_code_href='https://github.com/mentalitydark/estagio'
          view_project_href='https://mentalitydark.github.io/estagio/'
        >
          Esse jogo foi criado como finalização do curso de Informática para Internet do IFRS.
          A proposta era criar todo o código sem código externo.
          Então a parte de movimento, sprites, combate, inventário e afins foram criadas por mim.
          Por ter sido minha primeira vez tentando criar algo tão grande, faltou tempo para finalizar.
        </Project>
        <Project
          title='Tabela periódica'
          image={quimicaImage}
          tags={['Javascript', 'HTML5', 'CSS3', 'Trabalho em equipe']}
          view_code_href='https://github.com/mentalitydark/quimica2c'
          view_project_href='https://mentalitydark.github.io/quimica2c/'
        >
          Esse projeto foi feito para a finalização do ano segundo ano do curso de Informática para Internet do IFRS.
          Conversamos com nosso professor de química sobre o que ele acharia interessante criar e por ter um colega com deficiência visual, ele propôs a criação de uma tabela periódica que pudesse utilizar.
          Também por estar no assunto, foi pensando em uma maneira de trocar a cor dos elementos caso o usuário tenha daltonismo.
        </Project>
        <Project
          title='Snake Game'
          image={snakeImage}
          tags={['Next.Js', 'Electron', 'Typescript', 'CSS3']}
          view_code_href='https://github.com/mentalitydark/game-snake-nextron'
          view_project_href='https://github.com/mentalitydark/game-snake-nextron/releases/tag/v1.0.0'
        >
          Realizei esse projeto por estar a fim de criar um programa desktop.
          Pesquisando descobrir a existência do Electon e vi que era possível utilizar React com ele.
          Como tenho muita vontade de criar jogos, pensei em fazer um jogo básico utilizando isso.
        </Project>
        <Project
          title='API NodeJs'
          image={apiNodeImage}
          tags={['Express.Js', 'Typescript', 'MongoDB', 'RFC 7807']}
          view_code_href='https://github.com/mentalitydark/nodejs-api'
        >
          Uma API com autenticação e conexão ao bando MongoDB.
          O intuito foi aprender a criar uma API em node e conectar ao MongoDB. Também aproveitei e li sobre RFC 7807 e implementar esse padrão.
        </Project>
      </div>
    </>
  )
}
