import Moviecard from '../components/moviecard'
import { useState } from 'react'
import '../CSS/home.css'

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const movies = [
        { id: 1, title: "The Matrix", url: "https://example.com/matrix.jpg", releaseDate: "1999-03-31" },
        { id: 2, title: "Inception", url: "https://example.com/inception.jpg", releaseDate: "2010-07-16" },
        { id: 3, title: "Interstellar", url: "https://example.com/interstellar.jpg", releaseDate: "2014-11-07" },
        { id: 4, title: "The Dark Knight", url: "https://example.com/darkknight.jpg", releaseDate: "2008-07-18" },
        { id: 5, title: "Pulp Fiction", url: "https://example.com/pulpfiction.jpg", releaseDate: "1994-10-14" }
    ]
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