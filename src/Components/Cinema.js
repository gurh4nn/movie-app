import axios from "axios";
import React, {useEffect, useState} from "react";

function Cinema() {
    const [cinema, setCinema] = useState([]);
    useEffect(() => {
        axios
          .get("http://react-movie-api2021.herokuapp.com/api/cinema")
          .then((response) => setCinema(response.data));
      }, []);

  return (
    <div className="cinema-page">
      {cinema.map((cinema)=>(
      <div className="cinema-card" key={cinema.id}>
          <img src={cinema.img} alt={cinema.title}/>
        <div className="cinema-card-text">
          <h2>{cinema.title}</h2>
          <p>
            {cinema.description}
          </p>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Cinema;
