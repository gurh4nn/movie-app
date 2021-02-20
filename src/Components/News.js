import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import {Link} from "react-router-dom";


function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("https://react-movie-api2021.herokuapp.com/api/news")
      .then((response) => setNews(response.data));
  }, []);

  return (
    <div className="news-page">
      {news.map((news) => (
        <Link to={`/News/${news.id}`}>
        <div className="news-card" key={news.id}>
          <img src={news.img} alt={news.title} />
          <div className="news-card-text">
            <h2>{news.title}</h2>
            <img src={news.urlToImage} alt="" />
            <p>{news.content}</p>
            <p className="news-date">{news.date}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default News;
