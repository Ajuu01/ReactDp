import './Home.css'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <>
            <nav className='navbar'>
                <div className="container">
                    <a href="#" class='brand'>My Website</a>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="#">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="main-content">
                <div className="container">
                    <h1>Welcome to my website</h1>
                    <p>This is a simple page with nav-bar and content in the middle</p>
                    <p>meow meow</p>
                </div>
            </div>
        </>
    )
}

export default Home