import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { navLinks, site } from '../../data/site.js'
import { useActiveSection } from '../../hooks/useActiveSection.js'
import IconButton from '../ui/IconButton.jsx'
import ThemeToggle from '../ui/ThemeToggle.jsx'
import './Navbar.css'

const sectionIds = navLinks.map((link) => link.href.replace('/#', ''))

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)
  const menuButtonRef = useRef(null)
  const { pathname } = useLocation()
  const activeId = useActiveSection(sectionIds, pathname)
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 8)

  useEffect(() => {
    function updateScrolled() {
      setIsScrolled(window.scrollY > 8)
    }

    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current.focus()
      }
    }

    function closeOnOutsidePress(event) {
      if (!navRef.current.contains(event.target)) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsidePress)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsidePress)
    }
  }, [isMenuOpen])

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link className="navbar__brand" to="/">
          {site.name}
        </Link>
        <nav className="navbar__nav" aria-label="Main" ref={navRef}>
          <ul
            id="navbar-links"
            className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === '/' && link.href === `/#${activeId}`
              return (
                <li key={link.href}>
                  <a
                    className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <ThemeToggle />
          <IconButton
            className="navbar__menu-button"
            ref={menuButtonRef}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-links"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? (
              <X size={18} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu size={18} strokeWidth={1.75} aria-hidden="true" />
            )}
          </IconButton>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
