import { contactMethods } from '../../data/site.js'
import { revealDelay } from '../../utils/motion.js'
import ContactForm from '../ui/ContactForm.jsx'
import IconBadge from '../ui/IconBadge.jsx'
import Reveal from '../ui/Reveal.jsx'
import Section from '../ui/Section.jsx'
import './Contact.css'

function Contact() {
  return (
    <Section id="contact" label="Contact" title="Let's get in touch" band>
      <div className="contact__layout">
        <Reveal>
          <p className="contact__text">
            I would be glad to hear from you about internships, opportunities,
            or professional connections. You can reach me directly or use the
            form.
          </p>
          <ul className="contact__methods">
            {contactMethods.map(({ label, value, icon, link }) => (
              <li key={label}>
                <a className="contact__method" {...link}>
                  <IconBadge icon={icon} />
                  <span>
                    <span className="contact__method-label">{label}</span>
                    <span className="contact__method-value">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={revealDelay(1)}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}

export default Contact
