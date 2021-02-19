import React, { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductCard";
import "./Homescreen.css";
import Header from "./Header";
import Footer from "./Footer";
import database from "./firebase";

function Homescreen() {
  const [display, setDisplay] = useState(false);

  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);
  const [products, setProducts] = useState([]);

  //useEffect(() => {
  //  database
  //    .collection("products")
  //    .onSnapshot((snapshot) =>
  //      setProducts(snapshot.docs.map((doc) => doc.data()))
  //    );
  //}, []);

  useEffect(() => {
    database
      .collection("products")
      .onSnapshot((snapshot) =>
        setProducts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  console.log(products);

  //React.useEffect(() => {
  //  const fetchData = async () => {
  //    const db = firebase.firestore();
  //    const data = await db.collection("products").get();
  //    setProducts(data.docs.map((doc) => doc.data()));
  //  };
  //  fetchData();
  //}, []);

  //useEffect(() => {
  //  const pokemon = [];
  //  const promises = new Array(20)
  //    .fill()
  //    .map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
  //  Promise.all(promises).then((pokemonArr) => {
  //    return pokemonArr.map((value) =>
  //      value
  //        .json()
  //        .then(({ name, sprites: { front_default: sprite } }) =>
  //          pokemon.push({ name, sprite })
  //        )
  //    );
  //  });
  //  setOptions(pokemon);
  //}, []);

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

  //const updateProductDex = (product) => {
  //  setSearch(product);
  //  setDisplay(false);
  //};

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
            onClick={() => setDisplay(display)}
            onChange={(event) => setSearch(event.target.value)}
          />
          {display && (
            <div className="autoContainer">
              {products
                .filter(({ title }) => title.indexOf(search.toLowerCase()) > -1)
                .slice(0, 5)
                .map((products, index) => {
                  return (
                    <div
                      onClick={() => setProductDex(products.title)}
                      className="option"
                      key={products.title}
                      tabIndex="0"
                    >
                      <span>{products.title}</span>
                      <img src={products.image} alt="product" />
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
    //<div className="home__row">
    //  <ProductCard
    //    id="124124124124"
    //    title="Daily Mild Sunscreen 50ml"
    //    brand="INNISFREE"
    //    image="https://m.media-amazon.com/images/I/41iy+v8TF8L._AC_SS350_.jpg"
    //    price={16.44}
    //    content="Perfect for a beautiful summer's day. A walk in the park, a swim at the pool, this suncream just works"
    //  />
    //  <ProductCard
    //    id="53453453453"
    //    title="Sunprise Mild Airy Finish SPF 50 PA+++"
    //    brand="Etude House"
    //    image="https://www.yesstyle.com/blog/wp-content/uploads/2016/03/YSBL_0308_01.jpg"
    //    price={14.53}
    //    content="At 55ml with a retail price of less than US$14, you'll really want to get all the goodness of this sunscreen on your face"
    //  />
    //  <ProductCard
    //    id="124124124124"
    //    title="Daily Mild Sunscreen 50ml"
    //    brand="INNISFREE"
    //    image="https://m.media-amazon.com/images/I/41iy+v8TF8L._AC_SS350_.jpg"
    //    price={16.44}
    //    content="Perfect for a beautiful summer's day. A walk in the park, a swim at the pool, this suncream just works"
    //  />
    //  <ProductCard
    //    id="124124124124"
    //    title="Daily Mild Sunscreen 50ml"
    //    brand="INNISFREE"
    //    image="https://m.media-amazon.com/images/I/41iy+v8TF8L._AC_SS350_.jpg"
    //    price={16.44}
    //    content="Perfect for a beautiful summer's day. A walk in the park, a swim at the pool, this suncream just works"
    //  />
    //</div>
  );
}

export default Homescreen;
