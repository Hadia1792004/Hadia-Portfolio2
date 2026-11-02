import { m } from 'framer-motion'
import { useInViewAnimation } from '../../hooks/useInViewAnimation.js'
import { reveal } from '../../utils/motion.js'

// Fades and lifts its content the first time it scrolls into view.
// `delay` is in seconds, for items that appear side by side.
function Reveal({ as = 'div', delay = 0, ...props }) {
  const Component = m[as]
  const animation = useInViewAnimation()

  return (
    <Component variants={reveal} custom={delay} {...animation} {...props} />
  )
}

export default Reveal
