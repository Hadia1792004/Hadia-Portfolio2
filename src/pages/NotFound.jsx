import Button from '../components/ui/Button.jsx'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">This page doesn't exist.</h1>
        <Button to="/">Back to home</Button>
      </div>
    </section>
  )
}

export default NotFound
