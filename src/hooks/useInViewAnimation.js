import { useReducedMotion } from 'framer-motion'

// Props that animate an element once as it scrolls into view.
// Visitors who prefer reduced motion see the content straight away.
export function useInViewAnimation() {
  const prefersReducedMotion = useReducedMotion()

  return {
    initial: prefersReducedMotion ? false : 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '0px 0px -10% 0px' },
  }
}
