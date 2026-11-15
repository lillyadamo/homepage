import { Link } from 'react-router-dom'


function Home() {
  return (
    <section>
      <h1 className='section-title'>welcome</h1>
      <p>My name is Lilly. I graduated with a diploma in Application Development and Delivery, and I have
        an interest in web development, photography, and art. 
        This website is a collection of my projects, creative work, and professional experience. 
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
        
        {/* <Link className="photo-item" to="/devlog">
          <img src="/img/placeholders/spongebob.jpg" alt="Devlog Preview" />
          <span className="photo-label">devlog</span>
        </Link> */}
      </div>
    </section>
  )
}

export default Home