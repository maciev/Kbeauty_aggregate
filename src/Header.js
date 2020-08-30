import React from "react";
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
          <strong>Home</strong>
        </li>
        <li className="navbar--link-item">
          <strong>About</strong>
        </li>
        <li className="navbar--link-item">
          <strong>Blog</strong>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
