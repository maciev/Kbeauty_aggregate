import "./ProductPage.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

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
            <span className="span__brand">
              <b> Innisfree</b>
            </span>
            <h1>{product}</h1>

            {/*todo stars*/}
            <div className="div__price">
              <b> $35.45</b>
            </div>
            <div className="div__lastedupdated">Price checked 1 hour ago</div>
            <div className="div__box">
              Vendors
              <div className="div__vendorbox">
                <h1>Jolse</h1>
                <p>$14.25</p>
              </div>
              <div className="div__vendorbox">
                <h1>YesStyle</h1>
                <p>$15.23</p>
              </div>
              <div className="div__vendorbox">
                <h1>Beautynet</h1>
                <p>$15.42</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
