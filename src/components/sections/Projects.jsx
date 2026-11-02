import { projects } from '../../data/projects.js'
import { site } from '../../data/site.js'
import { revealDelay } from '../../utils/motion.js'
import Button from '../ui/Button.jsx'
import ProjectCard from '../ui/ProjectCard.jsx'
import Reveal from '../ui/Reveal.jsx'
import Section from '../ui/Section.jsx'
import './Projects.css'

function Projects() {
  return (
    <Section id="projects" label="Projects" title="Selected projects">
      <div className="projects__grid">
        {projects.map(({ slug, ...project }, index) => (
          <Reveal
            key={slug}
            className="projects__item"
            delay={revealDelay(index)}
          >
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
      <Reveal className="projects__more">
        <Button
          variant="secondary"
          href={site.github}
          target="_blank"
          rel="noreferrer"
        >
          View all repositories on GitHub
        </Button>
      </Reveal>
    </Section>
  )
}

export default Projects
