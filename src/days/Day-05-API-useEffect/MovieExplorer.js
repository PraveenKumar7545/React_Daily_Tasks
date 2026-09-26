import React, { useEffect, useState } from "react";
import TMDB_API_KEY from "./tmdbConfig";

function MovieExplorer() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url =
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`;

        const response = await fetch(url);

        const data = await response.json();

        setMovies(data.results);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>TMDB Movie Explorer</h1>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Rating: {movie.vote_average}</p>
          <p>Release Date: {movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieExplorer;