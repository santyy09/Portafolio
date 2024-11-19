import Project from './Project'
import { projectsData } from '../data/projectsData'
import './Projects.css'

export default function Projects(){
  return <section className='Projects'>
    <h2>Projects</h2>
    <div className='ListOfProjects'>

    {
      projectsData.map((projectData,index) => (
        <Project key={index}
        image={projectData.image}
        title={projectData.title}
        description={projectData.description}
        githubLink={projectData.githubLink}/>
      )
    )
  }
  </div>
  </section>
}
