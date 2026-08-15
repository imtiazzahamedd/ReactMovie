import Moviecard from '../Components/moviecard'
import { useState, useEffect } from 'react'
import { popular, search } from '../API/api'
import '../CSS/home.css'

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchpop = async () => {
            setLoading(true);
            try {
                const data = await popular();
                setMovies(data);
            } catch (error) {
                console.error(error);
                setError("Failed to load movies....");
            } finally {
                setLoading(false);
            }
        };
        fetchpop();
    }, []);
    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for ${searchTerm}`);
        setSearchTerm('');
    }
    return (
        <>
            <form onSubmit={handleSearch}>
                <input className="search-bar"
                    type="text" placeholder="Search for a movie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="home">
                <div className="movie-grid">
                    {movies.map(movie =>
                        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                        (<Moviecard key={movie.id} movie={movie} />
                        ))}
                </div>
            </div>
        </>
    )
}
export default Home