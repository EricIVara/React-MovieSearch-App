import React from "react";

function MovieDetails({ details }) {
  return (
    <div className="movie-info">
      <div className="movie-poster">
        <img
          src={
            details.Poster !== "N/A" ? details.Poster : "image_not_found.png"
          }
          alt="movie poster"
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{details.Title}</h3>
        <p>Year: {details.Year}</p>
        <p>Genre: {details.Genre}</p>
        <p>Actors: {details.Actors}</p>
        <p>Plot: {details.Plot}</p>
        <p>Language: {details.Language}</p>
        <p>Awards: {details.Awards}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
