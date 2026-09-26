import { useEffect, useState } from "react";
import TMDB_API_KEY from "./tmdbConfig";

function MovieExplorer() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url =
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        setError("Unable to load movies.");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-600">
        Loading movies...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-gray-600">
        {error}
      </p>
    );
  }

  return (
    <div>
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm font-semibold tracking-widest text-gray-500">
          TMDB API
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Movie Explorer
        </h1>

        <p className="text-gray-600 mt-3">
          Fetching popular movies using the TMDB REST API.
        </p>
      </div>

      {/* Movie Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            {/* Movie Poster */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />

            {/* Movie Details */}
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-900">
                {movie.title}
              </h2>

              <p className="text-gray-600 mt-3">
                Rating: {movie.vote_average}
              </p>

              <p className="text-gray-600 mt-1">
                Release Date: {movie.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieExplorer;