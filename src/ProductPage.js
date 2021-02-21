import "./ProductPage.css";
import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import database from "./firebase";

function ProductPage({ title, jolseprice, yesstyleprice }) {
  const [products, setProducts] = useState([
    { title, jolseprice, yesstyleprice },
  ]);

  useEffect(() => {
    database
      .collection("products")
      .onSnapshot((snapshot) =>
        setProducts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  const { product } = useParams();
  //console.log(products[0].title);

  //if (product === products.title) {
  //  return (
  //    {products
  //      .filter(({ title }) => title.indexOf()
  //      .map((products, index) => {
  //        return ( console.log("products.title")
  //        )})

  //To Fix
  //- Pull state data from parent (Homescreen)
  //- Map, if data.title = params title, then use product.price

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
            <h1>{products[0].title}</h1>

            {/*todo stars*/}
            <div className="div__price">
              <b> $35.45</b>
            </div>
            <div className="div__lastedupdated">Price checked 1 hour ago</div>
            <div className="div__box">
              Vendors
              <div className="div__vendorbox">
                <h1>Jolse</h1>
                <p>{products[0].jolseprice}</p>;
              </div>
              <div className="div__vendorbox">
                <h1>YesStyle</h1>
                <p>{products[0].yesstyleprice}</p>
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

//else {
//  console.log("e");
//}

export default ProductPage;
