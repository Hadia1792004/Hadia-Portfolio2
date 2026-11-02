import { m } from 'framer-motion'
import { popIn, stagger } from '../../utils/motion.js'
import IconBadge from './IconBadge.jsx'
import './SkillCard.css'

const listVariants = stagger(0.06, 0.15)

function SkillCard({ title, icon, skills }) {
  return (
    <article className="card card--interactive">
      <div className="skill-card__header">
        <IconBadge icon={icon} />
        <h3 className="skill-card__title">{title}</h3>
      </div>
      <m.ul
        className="skill-card__list"
        style={{ '--count': skills.length }}
        variants={listVariants}
      >
        {skills.map(({ name, icon: Logo, color }) => (
          <m.li
            key={name}
            className="skill-card__item"
            style={color ? { '--brand-color': color } : undefined}
            variants={popIn}
          >
            <Logo className="skill-card__logo" size={28} aria-hidden="true" />
            <span className="skill-card__name">{name}</span>
          </m.li>
        ))}
      </m.ul>
    </article>
  )
}

export default SkillCard
