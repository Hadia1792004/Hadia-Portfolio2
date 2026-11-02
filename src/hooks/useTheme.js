import { useState } from 'react'

const TRANSITION_MS = 350
let transitionTimer

function getInitialTheme() {
  const saved = document.documentElement.dataset.theme
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

// Follows the device setting until the visitor picks a theme themselves.
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    setTheme(next)

    // Colours only animate during the switch, so hover effects keep their own timing.
    root.classList.add('theme-transition')
    window.clearTimeout(transitionTimer)
    transitionTimer = window.setTimeout(
      () => root.classList.remove('theme-transition'),
      TRANSITION_MS,
    )
    root.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked; the choice then lasts until the page reloads.
    }
  }

  return { theme, toggleTheme }
}
