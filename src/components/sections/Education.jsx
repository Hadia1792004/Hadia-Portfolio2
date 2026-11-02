import { GraduationCap } from 'lucide-react'
import { site } from '../../data/site.js'
import IconBadge from '../ui/IconBadge.jsx'
import Reveal from '../ui/Reveal.jsx'
import Section from '../ui/Section.jsx'
import './Education.css'

function Education() {
  return (
    <Section id="education" label="Education" title="Academic background">
      <Reveal>
        <article className="card card--interactive education__card">
          <IconBadge icon={GraduationCap} />
          <div>
            <h3 className="education__degree">{site.degree}</h3>
            <p className="education__university">{site.university}</p>
          </div>
        </article>
      </Reveal>
    </Section>
  )
}

export default Education
