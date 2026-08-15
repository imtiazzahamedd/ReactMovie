import { Link } from 'react-router-dom'
import '../CSS/navbar.css'
function NavBar() {
    return (
        <>
            <nav className='navbar'>
                <div>
                    <Link className="movie_app" to="/">Movie App</Link>
                </div>
                <div className='nav-links'>
                    <Link to="/">Home</Link>
                    <Link to="/favourites">Favourites</Link>
                </div>
            </nav>
        </>
    )
}
export default NavBar