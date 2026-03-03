import { Link } from 'react-router-dom'

function Home(){

    return(
        <section>
            <h1 className='section-title'>Welcome</h1>
            <p>My name is lilly</p>
            <div className='link-album'>
                <Link className="photo-item" to="/art">
                    <img src="/img/placeholders/knight-armor.png" alt="Art Preview" />
                    <span className="photo-label">art</span>
                </Link>
            </div>
        </section>
    )
}

export default Home