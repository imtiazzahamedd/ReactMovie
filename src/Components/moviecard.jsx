import '../CSS/Moviecard.css'
function Moviecard({ movie }) {
    function FavClick() {
        alert(`You have added ${movie.title} to your favourites!`);
    }
    return (
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay">
                        <button className="favourite-btn" onClick={FavClick}>Fav</button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.releaseDate}</p>
                </div>
            </div>
        </>
    )
}

export default Moviecard