import "./ProductPage.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  const { product } = useParams();

  //var datas = props.location.state;

  //BELOW CODE REMOVES $

  for (const [key, value] of Object.entries(props.location.state)) {
    if (value.includes("$")) {
      var newValue = value.replace("$", "").replace("_", "");

      //for (let index = 0; index < 2; index++) {
      //  const finalArray = newArray.concat(newArray.entries());
      //}
    } else {
      console.log("this aint it");
    }
    var newArray = [];
    newArray.push(newValue);
    console.log(newArray);
  }

  //NOW LET'S SORT THAT ARRAY

  return (
    <>
      <Header />
      <div className="div__container">
        <div className="div__left">
          <img
            src={props.location.state.image}
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
