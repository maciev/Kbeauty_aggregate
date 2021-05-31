import "./ProductPage.css";
import React from "react";
import Headercomp from "./Headercomp";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  const { product } = useParams();

  var datas = props.location.state;
  //const newArray = Object.values(datas);

  //now we have an array with objects -- how do we select object?

  for (const [key, value] of Object.entries(datas)) {
    if (value.includes("$")) {
      value.replace("$", "");
    } else {
      console.log("this aint it brah");
    }
    //console.log(`${key} : ${finalValue}`);
  }
  return (
    <>
      <Headercomp />
      <div className="div__container">
        <div className="div__top">
          <img
            src={props.location.state.image}
            alt=""
            className="main__image"
          />
        </div>
        <div className="div__bottom">
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
                <h1>
                  <a href={props.location.state.jolselink}>Jolse</a>
                </h1>
                <p>{props.location.state.jolseprice}</p>
              </div>
              <div className="div__vendorbox">
                <h1>
                  <a href={props.location.state.yesstylelink}>YesStyle</a>
                </h1>
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

export default ProductPage;
