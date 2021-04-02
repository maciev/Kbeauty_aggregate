import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homescreen from "./Homescreen";
import ProductPage from "./ProductPage";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Homescreen />
          </Route>

          <Route
            path="/product/:product"
            exactly
            component={ProductPage}
          ></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
