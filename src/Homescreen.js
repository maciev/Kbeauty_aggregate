import React, { useEffect, useState, useRef, createContext } from "react";
import "./Homescreen.css";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import database from "./firebase";
import { Link } from "react-router-dom";
import ProductPage from "./ProductPage";

function Homescreen() {
  const [display, setDisplay] = useState(false);

  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    database
      .collection("products")
      .onSnapshot((snapshot) =>
        setProducts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  const setProductDex = (product) => {
    setSearch(product);
    setDisplay(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  return (
    <div className="section">
      <Header />
      <div className="container">
        <h1 className="title">Kcompare</h1>
        <p className="subtitle">
          Korean beauty <strong>without</strong> the cost!
        </p>
      </div>
      <div className="search__wrap">
        <div ref={wrapperRef} className="search">
          <input
            type="text"
            value={search}
            onClick={() => setDisplay(!display)}
            onChange={(event) => setSearch(event.target.value)}
          />
          {display && (
            <div className="autoContainer">
              {products
                .filter(({ title }) => title.indexOf(search.toLowerCase()) > -1)
                .slice(0, 5)
                .map((products, index) => {
                  return (
                    <Link
                      to={{
                        pathname: `/product/${products.title}`,
                        state: {
                          image: products.image,
                          jolselink: products.jolselink,
                          yesstylelink: products.yesstylelink,
                          jolseprice: products.jolseprice,
                          yesstyleprice: products.yesstyleprice,
                        },
                      }}
                    >
                      <div
                        onClick={() => setProductDex(products.title)}
                        className="option"
                        key={products.title}
                        tabIndex="0"
                      >
                        <span>{products.title}</span>
                        <img src={products.image} alt="product" />
                      </div>
                    </Link>
                  );
                })}
            </div>
          )}
        </div>
      </div>
      <div className="productcardbox">
        {products.slice(0, 4).map((products, index) => {
          return <ProductCard image={products.image} title={products.title} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Homescreen;
