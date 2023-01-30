import React from "react";
import { Link } from "react-router-dom";
import './navigation.css'

function Navigation() {
  return (
    <nav>
        <h1><img src={process.env.PUBLIC_URL + "logo.png"} alt="" className="logo"/></h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/romance">Romance</Link>
        </li>
        <li>
          <Link to="/enfance">Enfance</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
