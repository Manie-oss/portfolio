import { projects } from '../../utils/portfolio'
import ProjectContainer from '../ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
