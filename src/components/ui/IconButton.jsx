import './IconButton.css'

function IconButton({ className = '', ...props }) {
  return (
    <button
      className={`icon-button ${className}`.trim()}
      type="button"
      {...props}
    />
  )
}

export default IconButton
