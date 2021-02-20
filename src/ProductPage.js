import "./ProductPage.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { product } = useParams();

  return (
    <>
      <Header />
      <div className="div__container">
        <div className="div__left">
          <img
            src="https://i.ebayimg.com/images/g/3nQAAOSwQZNeTO~x/s-l640.jpg"
            alt=""
            className="main__image"
          />
        </div>
        <div className="div__right">
          <div className="div__info">
            <span className="span__brand">Innisfree</span>
            <h1>{product}</h1>

            {/*todo stars*/}
            <div className="div__price">$35.45</div>
            <div className="div__lastedupdated">Price checked 1 hour ago</div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
