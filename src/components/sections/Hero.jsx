import { site } from '../../data/site.js'
import Button from '../ui/Button.jsx'
import SocialLinks from '../ui/SocialLinks.jsx'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__glow hero__glow--primary" />
        <span className="hero__glow hero__glow--secondary" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting hero__reveal">Hello, I'm</p>
          <h1 className="hero__heading">
            <span className="hero__name hero__reveal">{site.name}</span>
            <span className="hero__role hero__reveal">{site.role}</span>
          </h1>
          <p className="hero__intro hero__reveal">{site.intro}</p>
          <p className="hero__passion hero__reveal">{site.passion}</p>
          <div className="hero__actions hero__reveal">
            <Button href="#projects">View My Projects</Button>
            <Button variant="secondary" href="#contact">
              Contact Me
            </Button>
            <SocialLinks />
          </div>
        </div>

        <div className="hero__visual hero__reveal">
          <div className="hero__frame">
            <img
              className="hero__image"
              src={site.heroImage.src}
              alt={site.heroImage.alt}
              width="800"
              height="800"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
