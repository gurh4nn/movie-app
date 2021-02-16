import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function NewsDetail() {
  const [newsDetail, setNewsDetail] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/api/news/${id}`
      )
      .then((response) => setNewsDetail(response.data));
  }, []);

  return (


    <div className="movie_details">
      <div className="movie_detail">
        <div className="movie-img">
          <img width="100%" src={newsDetail.img} alt={newsDetail.title}/>
          <p className="news-detail-date">{newsDetail.date}</p>
        </div>
        <div className="movie-content">
          <h1>{newsDetail.title}</h1>
          <p>{newsDetail.content}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
