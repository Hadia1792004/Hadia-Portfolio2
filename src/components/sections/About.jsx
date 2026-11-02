import { aboutHighlights, aboutLead } from '../../data/about.js'
import { site } from '../../data/site.js'
import { revealDelay } from '../../utils/motion.js'
import FeatureCard from '../ui/FeatureCard.jsx'
import Reveal from '../ui/Reveal.jsx'
import Section from '../ui/Section.jsx'
import TagList from '../ui/TagList.jsx'
import './About.css'

function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Building on an engineering foundation"
    >
      <div className="about__layout">
        <Reveal className="about__summary">
          <p className="about__lead">{aboutLead}</p>
          <h3 className="about__subheading">Career interests</h3>
          <TagList items={site.interests} />
        </Reveal>
        <div className="about__highlights">
          {aboutHighlights.map(({ icon, title, text }, index) => (
            <Reveal
              key={title}
              className="about__highlight"
              delay={revealDelay(index, 2)}
            >
              <FeatureCard icon={icon} title={title}>
                {text}
              </FeatureCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default About
