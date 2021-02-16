import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3cbd8c56b79a77f8e38f3ff57cf080be&language=en-US`
      )
      .then((response) => setMovieDetail(response.data));
  }, []);

  const imgApi = "https://image.tmdb.org/t/p/w500/";
  return (
    // <div className="movie-detail">

    //     <div className="test" >
    //       <h1>
    //            {movieDetail.title}
    //       </h1>
    //      <img src={imgApi + movieDetail.backdrop_path} alt={movieDetail.title}/>
    //     </div>
    //  <p>
    //      {movieDetail.overview}
    //  </p>
    // </div>

    <div className="movie_details">
      <div className="movie_detail">
        <div className="movie-img">
          <img
            width="100%"
            src={imgApi + movieDetail.backdrop_path}
            alt={movieDetail.title}
          />
        </div>
        <div className="movie-info">
          <span>Release Date: {movieDetail.release_date} </span>
          <span className="bg-yellow"> User Rating: {movieDetail.vote_average} </span>
          <span>Vote Count: {movieDetail.vote_count} </span>
        </div>
        <div className="movie-content">
          <h1>{movieDetail.title}</h1>
          <p>{movieDetail.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
