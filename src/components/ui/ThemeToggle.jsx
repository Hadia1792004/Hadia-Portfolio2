import { AnimatePresence, m } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.js'
import IconButton from './IconButton.jsx'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const Icon = theme === 'dark' ? Sun : Moon

  return (
    <IconButton
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={theme}
          style={{ display: 'flex' }}
          initial={{ opacity: 0, rotate: -60 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 60 }}
          transition={{ duration: 0.15 }}
        >
          <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
        </m.span>
      </AnimatePresence>
    </IconButton>
  )
}

export default ThemeToggle
