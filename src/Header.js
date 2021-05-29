import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
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
    </nav>
  );
}

export default Header;
