import { skillGroups } from '../../data/skills.js'
import { revealDelay } from '../../utils/motion.js'
import Reveal from '../ui/Reveal.jsx'
import Section from '../ui/Section.jsx'
import SkillCard from '../ui/SkillCard.jsx'
import './Skills.css'

function Skills() {
  return (
    <Section id="skills" label="Skills" title="Technical skills" band>
      <div className="skills__grid">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            className="skills__card"
            delay={revealDelay(index)}
          >
            <SkillCard {...group} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Skills
