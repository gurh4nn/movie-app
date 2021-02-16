import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/#">MovieApp</Link>
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li className="dropdown">
            <Link to="/Movie">Filmler</Link>
          </li>
          <li>
            <Link to="/News">Haberler</Link>
          </li>
          <li>
            <Link to="/Cinema">Salonlar</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
