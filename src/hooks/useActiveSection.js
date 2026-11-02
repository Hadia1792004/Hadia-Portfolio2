import { useEffect, useState } from 'react'

// Tracks which page section is crossing the middle of the screen.
export function useActiveSection(ids, pathname) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) setActiveId(target.id)
          else setActiveId((current) => (current === target.id ? '' : current))
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [ids, pathname])

  return activeId
}
