import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Homescreen from "./Homescreen";
import ProductPage from "./ProductPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Homescreen />
        </Route>

        <Route exact path="/product">
          <ProductPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
