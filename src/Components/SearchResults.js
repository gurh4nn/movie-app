import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
function SearchResults({movies}) {
    const imgApi = "https://image.tmdb.org/t/p/w500/";
    return (
        <Fragment>
            
      {movies.map((movie) => (
        <Link to={`/Movie/${movie.id}`}>
          <div className="movie-card" key={movie.id}>
            <img src={movie.backdrop_path ? imgApi + movie.backdrop_path : "https://via.placeholder.com/300.png"} alt={movie.Title} />
            <div className="movie-card-text">
              <h2>{movie.title}</h2>

              <p>{movie.overview}</p>
            </div>
          </div>
        </Link>
      ))}
        </Fragment>
    )
}

export default SearchResults
