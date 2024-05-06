import React from "react";
import styles from "../styles/MovieList.module.css";

function MovieList({ movies, onSelectMovie }) {
  return (
    <div className={styles.searchList}>
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className={styles.searchListItem}
          onClick={() => onSelectMovie(movie.imdbID)}
        >
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "assets/image_not_found.png"
            }
            alt="Poster"
          />
          <div>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
