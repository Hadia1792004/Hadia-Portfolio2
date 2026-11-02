import { navLinks, site } from '../../data/site.js'
import SocialLinks from '../ui/SocialLinks.jsx'
import './Footer.css'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div>
            <p className="footer__name">{site.name}</p>
            <p>{site.role}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="footer__nav">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks includeEmail />
        </div>
        <div className="footer__bottom">
          <p>
            © {currentYear} {site.name}. All rights reserved.
          </p>
          <p>Built with React and Vite.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
