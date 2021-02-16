import React from "react";
import { Link } from "react-router-dom";
import skyfire from "../skyfire.mp4";
import moviejpg from "../movie.jpg";
import newsjpg from "../news.jpg";

function Home() {
  return (
    <div className="header">
      <div className="welcome">
      <div className="header-img">
        <video src={skyfire} autoPlay="true" loop />
      </div>
      <div className="header-title">
        <h1>Movie App</h1>
        <p>Unlimited movies, series and much more.</p>
      </div>
      </div>
    

      <div className="header-box">
        {/* <Link to="./Movie">
          <div className="box-movie">
            <img src={moviejpg} alt="" />
            <div className="overlay">
              <div className="text">Movie News</div>
            </div>
          </div>
        </Link> */}
        <Link to="./Movie">
          <div className="box-movie">
            <img src={moviejpg} alt="" />
            <div className="overlay">
              <div className="text">Best Movie</div>
            </div>
          </div>
        </Link>
        <Link to="./News">
          <div className="box-news">
            <img src={newsjpg} alt="" />
            <div className="overlay">
              <div className="text">Movie News</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Home;
