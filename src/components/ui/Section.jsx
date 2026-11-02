import { m } from 'framer-motion'
import { useInViewAnimation } from '../../hooks/useInViewAnimation.js'
import { fadeIn } from '../../utils/motion.js'
import './Section.css'

// Standard page section with a small monospace label above its heading.
// `band` gives it a slightly different background, to separate it from its neighbours.
function Section({ id, label, title, band = false, children }) {
  const animation = useInViewAnimation()

  return (
    <section
      id={id}
      className={band ? 'section section--band' : 'section'}
      aria-labelledby={`${id}-title`}
    >
      <div className="container section__inner">
        <m.div variants={fadeIn} {...animation}>
          <p className="section__label">{label}</p>
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
        </m.div>
        {children}
      </div>
    </section>
  )
}

export default Section
