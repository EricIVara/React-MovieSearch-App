import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

const API_KEY = "d7bfee7c"; // Remember to replace this with your actual API key!

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (searchTerm) => {
    if (!searchTerm) return;
    const response = await fetch(
      `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=${API_KEY}`
    );
    const data = await response.json();
    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  const fetchMovieDetails = async (movieId) => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`
    );
    const data = await response.json();
    setSelectedMovie(data);
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <p>
          Movie<span>Search</span>
        </p>
      </div>
      <SearchBox onSearch={searchMovies} />
      <MovieList movies={movies} onSelectMovie={fetchMovieDetails} />
      {selectedMovie && <MovieDetails details={selectedMovie} />}
    </div>
  );
}

export default App;
