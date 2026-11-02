import Reveal from './Reveal.jsx'
import TagList from './TagList.jsx'
import './TimelineItem.css'

function TimelineItem({
  icon: Icon,
  title,
  subtitle,
  period,
  badge,
  tone,
  description,
  tags,
}) {
  return (
    <Reveal as="li" className={`timeline-item timeline-item--${tone}`}>
      <span className="timeline-item__marker">
        <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div className="card card--interactive">
        <div className="timeline-item__header">
          <div>
            <p className="timeline-item__badge">{badge}</p>
            <h3 className="timeline-item__title">{title}</h3>
            {subtitle && <p className="timeline-item__subtitle">{subtitle}</p>}
          </div>
          <p className="timeline-item__period">{period}</p>
        </div>
        {description && (
          <p className="timeline-item__description">{description}</p>
        )}
        {tags && (
          <div className="timeline-item__tags">
            <TagList items={tags} />
          </div>
        )}
      </div>
    </Reveal>
  )
}

export default TimelineItem
