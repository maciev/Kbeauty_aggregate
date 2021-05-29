import React from "react";
import { Link } from "react-router-dom";
import "./Headercomp.css";

function Headercomp() {
  return (
    <nav className="navbarcomp">
      <div className="navbarcontainer">
        <div className="navbar--logo-holder">
          <img
            src="https://static.thenounproject.com/png/1335658-200.png"
            alt="logo"
            className="navbar--logo"
          />
        </div>
        <ul className="navbar--link">
          <li className="navbar--link-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar--link-item">About</li>
          <li className="navbar--link-item">Blog</li>
        </ul>
      </div>
    </nav>
  );
}

export default Headercomp;
