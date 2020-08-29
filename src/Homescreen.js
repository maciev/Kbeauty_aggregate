import React from "react";
import ProductCard from "./ProductCard";
import "./Homescreen.css";
import Header from "./Header";

function Homescreen() {
  return (
    <div>
      <Header />

      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
      <input type="text" />
      <div className="home__row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Homescreen;
