import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <h1 className='section-title'>welcome</h1>
      <p>my name is lilly. I'm currently studying application development and delivery at 
        Red River Polytechnic. This is a website showcasing some of my work. 
        I enjoy photography, art, and coding.
      </p>
      <div className='photo-album'>
        <Link className="photo-item" to="/art">
          <img src="/img/placeholders/knight-armor.png" alt="Art Preview" />
          <span className="photo-label">art</span>
        </Link>
        <Link className="photo-item" to="/photography">
          <img src="/img/placeholders/photo-1.jpg" alt="Photography Preview" />
          <span className="photo-label">photography</span>
        </Link>
        <Link className="photo-item" to="/projects">
          <img src="/img/placeholders/coding.png" alt="Projects Preview" />
          <span className="photo-label">projects</span>
        </Link>
        /* secret link */
        {/* <Link className="photo-item" to="/devlog">
          <img src="/img/placeholders/spongebob.jpg" alt="Devlog Preview" />
          <span className="photo-label">devlog</span>
        </Link> */}
      </div>
    </section>
  )
}

export default Home