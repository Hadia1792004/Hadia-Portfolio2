const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_NAME_LENGTH = 2
const MIN_MESSAGE_LENGTH = 10

export const MAX_NAME_LENGTH = 100
// Longer messages can exceed the length some email apps accept in a mailto link.
export const MAX_MESSAGE_LENGTH = 1000

const validators = {
  name(value) {
    if (!value) return 'Please enter your name.'
    if (value.length < MIN_NAME_LENGTH) {
      return `Your name must be at least ${MIN_NAME_LENGTH} characters.`
    }
    return ''
  },
  email(value) {
    if (!value) return 'Please enter your email address.'
    if (!EMAIL_PATTERN.test(value)) {
      return 'Please enter a valid email address, such as name@example.com.'
    }
    return ''
  },
  message(value) {
    if (!value) return 'Please enter your message.'
    if (value.length < MIN_MESSAGE_LENGTH) {
      return `Your message must be at least ${MIN_MESSAGE_LENGTH} characters.`
    }
    return ''
  },
}

export function validateField(field, value) {
  return validators[field](value.trim())
}

export function validateForm(values) {
  return {
    name: validateField('name', values.name),
    email: validateField('email', values.email),
    message: validateField('message', values.message),
  }
}

export function buildMailtoUrl({ name, email, message }, recipient) {
  const subject = `Portfolio enquiry from ${name.trim()}`
  const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
