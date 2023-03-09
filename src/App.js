import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';

import MovieCard from "./MovieCard";


const API_url = 'http://www.omdbapi.com?apikey=c88bb467';

// const movie1 = {
//     "Title": "Batman: The Animated Series",
//     "Year": "1992–1995",
//     "imdbID": "tt0103359",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
// }



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchterm, setSearchTerm] = useState("")

    useEffect(() => {
        searchMovies('Superman');
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_url}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }



    return (
        <div className="app">
            <h1>Filmyfy</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchterm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchterm)}
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                            //<MovieCard movie1={movie1} />
                        ))}
                        

                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}




        </div>
    )


}

export default App;
