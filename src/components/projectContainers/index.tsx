import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import './ProjectContainer.css'

const ProjectContainer = ({ project }:any) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item:string) => (
          <li key={item} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <FaGithub className='h-8 w-8 inline-block p-1'/>
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <MdLaunch className='h-8 w-8 inline-block p-1'/>
      </a>
    )}
  </div>
)

export default ProjectContainer
