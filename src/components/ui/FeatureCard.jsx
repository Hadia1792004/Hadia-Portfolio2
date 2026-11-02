import IconBadge from './IconBadge.jsx'
import './FeatureCard.css'

function FeatureCard({ icon, title, children }) {
  return (
    <article className="card card--interactive">
      <IconBadge icon={icon} />
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__text">{children}</p>
    </article>
  )
}

export default FeatureCard
