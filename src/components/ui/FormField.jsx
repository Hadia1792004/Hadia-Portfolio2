import './FormField.css'

function FormField({
  as: Control = 'input',
  label,
  name,
  error,
  hint,
  ...props
}) {
  const id = `field-${name}`
  const describedBy =
    [error && `${id}-error`, hint && `${id}-hint`].filter(Boolean).join(' ') ||
    undefined

  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {label}
      </label>
      <Control
        className="form-field__control"
        id={id}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        {...props}
      />
      <div className="form-field__footer">
        {error && (
          <p className="form-field__error" id={`${id}-error`}>
            {error}
          </p>
        )}
        {hint && (
          <p className="form-field__hint" id={`${id}-hint`}>
            {hint}
          </p>
        )}
      </div>
    </div>
  )
}

export default FormField
