import { Mail } from 'lucide-react'
import { useState } from 'react'
import { site } from '../../data/site.js'
import {
  buildMailtoUrl,
  MAX_MESSAGE_LENGTH,
  MAX_NAME_LENGTH,
  validateField,
  validateForm,
} from '../../utils/contactForm.js'
import Button from './Button.jsx'
import FormField from './FormField.jsx'
import './ContactForm.css'

const emptyValues = { name: '', email: '', message: '' }

// There is no backend, so a valid form opens the visitor's own email app.
// Nothing is delivered until the visitor presses Send there.
function ContactForm() {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState({})
  const [hasOpenedEmailApp, setHasOpenedEmailApp] = useState(false)

  function handleChange({ target: { name, value } }) {
    setValues((current) => ({ ...current, [name]: value }))
    setHasOpenedEmailApp(false)
    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: validateField(name, value),
      }))
    }
  }

  // An empty field is only flagged on submit, not while tabbing past it.
  function handleBlur({ target: { name, value } }) {
    if (value.trim()) {
      setErrors((current) => ({
        ...current,
        [name]: validateField(name, value),
      }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateForm(values)
    setErrors(nextErrors)

    const firstInvalidField = Object.keys(nextErrors).find(
      (field) => nextErrors[field],
    )
    if (firstInvalidField) {
      event.currentTarget.elements[firstInvalidField].focus()
      return
    }

    window.location.href = buildMailtoUrl(values, site.email)
    setHasOpenedEmailApp(true)
  }

  return (
    <form className="card contact-form" onSubmit={handleSubmit} noValidate>
      <p className="contact-form__note">
        All fields are required. This form does not send messages by itself: it
        opens your email app with your message ready to send.
      </p>
      <FormField
        label="Name"
        name="name"
        type="text"
        autoComplete="name"
        maxLength={MAX_NAME_LENGTH}
        required
        value={values.name}
        error={errors.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={values.email}
        error={errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormField
        as="textarea"
        label="Message"
        name="message"
        maxLength={MAX_MESSAGE_LENGTH}
        required
        value={values.message}
        error={errors.message}
        hint={`${values.message.length}/${MAX_MESSAGE_LENGTH}`}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div>
        <Button type="submit">
          <Mail size={16} aria-hidden="true" />
          Open Email App
        </Button>
      </div>
      <div className="contact-form__status" role="status">
        {hasOpenedEmailApp && (
          <p>
            Your email app should now be open with your message. It has not been
            sent yet, so please press Send there. If nothing opened, you can
            email me directly at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
