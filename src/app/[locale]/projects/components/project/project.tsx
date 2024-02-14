import { Code, Visibility } from '@mui/icons-material'

import type { ProjectProps } from './project-types'

import { Button, Card, Description, Image, Tags, Title } from './components'

export const Project = ({ title, image, description, tags, view_code_href, view_project_href }: ProjectProps) => {
  return (
    <Card>
      <Title text={title} />
      <Image src={image} alt={`Image of the ${title} project`} />
      <Description text={description} />
      <Tags data={tags} />
      <div className='flex flex-row justify-evenly mt-4'>
        <Button href={view_code_href} icon={<Code />} />
        {view_project_href && (<Button href={view_project_href} icon={<Visibility />} />)}
      </div>
    </Card>
  )
}
