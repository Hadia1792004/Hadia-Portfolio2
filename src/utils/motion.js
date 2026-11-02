// Shared Framer Motion settings, so every animation on the site moves the same way.
const easeOut = [0.2, 0.7, 0.2, 1]

export const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, delay },
  }),
}

// Cards in the same grid row appear one after another.
export function revealDelay(index, columns = 3) {
  return (index % columns) * 0.08
}

export const popIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
}

export function stagger(delay, delayChildren = 0) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: delay, delayChildren } },
  }
}
