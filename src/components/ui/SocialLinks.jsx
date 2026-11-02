import { contactMethods } from '../../data/site.js'
import './SocialLinks.css'

function SocialLinks({ includeEmail = false }) {
  const links = contactMethods.filter(
    ({ label }) => includeEmail || label !== 'Email',
  )

  return (
    <ul className="social-links">
      {links.map(({ label, icon: Icon, link }) => (
        <li key={label}>
          <a
            className="social-links__link"
            aria-label={label}
            title={label}
            {...link}
          >
            <Icon size={20} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
