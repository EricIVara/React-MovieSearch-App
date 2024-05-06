import React from "react";

function MovieList({ movies, onSelectMovie }) {
  return (
    <div className="search-list">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="search-list-item"
          onClick={() => onSelectMovie(movie.imdbID)}
        >
          <div className="search-item-thumbnail">
            <img
              src={
                movie.Poster !== "N/A" ? movie.Poster : "image_not_found.png"
              }
              alt="Poster"
            />
          </div>
          <div className="search-item-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
