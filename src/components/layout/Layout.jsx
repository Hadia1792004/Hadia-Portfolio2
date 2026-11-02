import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import './Layout.css'

function Layout() {
  const { hash } = useLocation()

  // The browser can't scroll to a section on page load because React hasn't rendered it yet.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <div className="layout">
      <a className="layout__skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
