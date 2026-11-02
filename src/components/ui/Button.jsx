import { Link } from 'react-router'
import './Button.css'

// Renders a router link with `to`, a normal link with `href`, otherwise a button.
function Button({ variant = 'primary', to, href, className = '', ...props }) {
  const classes = `button button--${variant} ${className}`.trim()

  if (to) return <Link className={classes} to={to} {...props} />
  if (href) return <a className={classes} href={href} {...props} />
  return <button className={classes} type="button" {...props} />
}

export default Button
