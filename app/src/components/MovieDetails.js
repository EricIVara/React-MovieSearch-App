import React from "react";
import styles from "../styles/MovieDetails.module.css";

function MovieDetails({ details }) {
  return (
    <div className={styles.movieInfo}>
      <img
        src={
          details.Poster !== "N/A"
            ? details.Poster
            : "assets/image_not_found.png"
        }
        alt="movie poster"
        className={styles.moviePoster}
      />
      <div>
        <h3>{details.Title}</h3>
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
