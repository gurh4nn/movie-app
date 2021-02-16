import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchResults from "./SearchResults";


function Movie({movies}) {
  const [search, setSearch] = useState('');
  const [searhResults, setSearhResults] = useState([]);

  const url= "https://api.themoviedb.org/3/search/movie?api_key=3cbd8c56b79a77f8e38f3ff57cf080be&language=en-US&query=";
  const imgApi = "https://image.tmdb.org/t/p/w500/";

  const searchFunction = (e) => {
    e.preventDefault();
    axios
      .get(
        url + search
      )
      .then((response) => setSearhResults(response.data.results));
  }

  return (
    <div className="movie-page">
      <div className="search">
        <form onSubmit={searchFunction}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search MovieApp"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Ara" />
        </form>
      </div>
        
        {/* {search.map((search) => (
        <Link to={`/Movie/${search.id}`}>
          <div className="movie-card" key={search.id}>
            <img src={imgApi + search.backdrop_path} alt={search.Title} />
            <div className="movie-card-text">
              <h2>{search.title}</h2>

              <p>{search.overview}</p>
            </div>
          </div>
        </Link>
      ))} */}


{searhResults.length >= 1 ? <SearchResults movies={searhResults} /> : movies.map((movie) => (
        <Link to={`/Movie/${movie.id}`}>
          <div className="movie-card" key={movie.id}>
            <img src={imgApi + movie.backdrop_path} alt={movie.Title} />
            <div className="movie-card-text">
              <h2>{movie.title}</h2>

              <p>{movie.overview}</p>
            </div>
          </div>
        </Link>
      ))}
      
    </div>
  )
}

export default Movie;