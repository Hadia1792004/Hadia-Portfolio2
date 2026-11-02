import { ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import Button from './Button.jsx'
import TagList from './TagList.jsx'
import './ProjectCard.css'

function ProjectCard({ title, description, tags, image, githubUrl, liveUrl }) {
  return (
    <article className="card card--interactive project-card">
      <div className="project-card__media">
        <img
          className="project-card__image"
          src={image.src}
          alt={image.alt}
          width="1280"
          height="720"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <TagList items={tags} />
        {(githubUrl || liveUrl) && (
          <div className="project-card__actions">
            {liveUrl && (
              <Button href={liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={16} aria-hidden="true" />
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="secondary"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${title} on GitHub`}
              >
                <SiGithub size={16} aria-hidden="true" />
                GitHub
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
