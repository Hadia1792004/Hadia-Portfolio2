import './IconBadge.css'

function IconBadge({ icon: Icon }) {
  return (
    <span className="icon-badge">
      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
    </span>
  )
}

export default IconBadge
