import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <nav className="footbar">
      <div className="footbar--logo-holder"></div>
      <ul className="footbar--link">
        <li className="footbar--link-item">
          <strong>Disclainer</strong>
        </li>
        <li className="footbar--link-item">
          <strong>FAQ</strong>
        </li>
        <li className="footbar--link-item">
          <strong>Affiliate</strong>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
