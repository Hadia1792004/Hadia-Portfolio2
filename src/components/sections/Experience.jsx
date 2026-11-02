import { experience, experienceTypes } from '../../data/experience.js'
import Reveal from '../ui/Reveal.jsx'
import Section from '../ui/Section.jsx'
import TimelineItem from '../ui/TimelineItem.jsx'
import './Experience.css'

function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Practical experience and training"
      band
    >
      <Reveal as="p" className="experience__intro">
        Placements, internships, and training I have undertaken alongside my
        studies.
      </Reveal>
      <ul>
        {experience.map(({ type, ...item }) => (
          <TimelineItem
            key={item.title}
            icon={experienceTypes[type].icon}
            badge={experienceTypes[type].label}
            tone={type}
            {...item}
          />
        ))}
      </ul>
    </Section>
  )
}

export default Experience
