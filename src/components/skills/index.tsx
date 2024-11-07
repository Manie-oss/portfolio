import { skills } from './../../utils/portfolio';
import './Skills.css';

const Skills = () => {
    return(
        <section id='skills' className='section skill flex justify-center items-center'>
            <h2 className='section__title'>Skills</h2>
            <div className='center mb-16'>
                <p className='about__skills'>
                    I have extensive experience working with a variety of technologies as a developer. I&apos;ve developed and maintained multiple projects using these technologies, and I&apos;m always eager to learn more.
                </p>
            </div>
            <div className='list'>
                {skills.map(({slug, title, Component, Description}) => (
                    <div className="skill-list-item" key={slug}>
                        <picture>
                            <Component size="3rem" />
                        </picture>
                        <div className='list-container'>
                            <div className='list-title'>{title}</div>
                            <div className='list-paragraph'>
                            <Description />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;