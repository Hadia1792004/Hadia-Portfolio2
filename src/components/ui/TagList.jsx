import Tag from './Tag.jsx'
import './TagList.css'

function TagList({ items }) {
  return (
    <ul className="tag-list">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}

export default TagList
