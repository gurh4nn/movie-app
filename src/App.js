import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import News from "./Components/News";
import Cinema from "./Components/Cinema";
import MovieDetail from "./Components/MovieDetail";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import NewsDetail from "./Components/NewsDetail";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=3cbd8c56b79a77f8e38f3ff57cf080be&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true"
      )
      .then((response) => setMovies(response.data.results));
  }, []);
  


  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Movie">
          <Movie key={movies.id} movies={movies} />
        </Route>
        <Route exact path="/News" component={News} />
        <Route exact path="/Cinema" component={Cinema} />
        {/* <Route path="/Movie/:id" component={MovieDetail} movies={movies} /> */}
             <Route exact path="/Movie/:id">
          {/* <MovieDetail key={movies.id} movies={movies} /> */}
          <MovieDetail />
        </Route>
        <Route exact path="/News/:id">
          <NewsDetail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
