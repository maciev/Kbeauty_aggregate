import "./ProductPage.css";
import React from "react";
import Headercomp from "./Headercomp";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  const { product } = useParams();
  console.log(props.location.state.jolseprice);

  return (
    <>
      <Headercomp />
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
                <p>{props.location.state.jolseprice}</p>;
              </div>
              <div className="div__vendorbox">
                <h1>YesStyle</h1>
                <p>{props.location.state.yesstyleprice}</p>
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
};

//else {
//  console.log("e");
//}

export default ProductPage;
