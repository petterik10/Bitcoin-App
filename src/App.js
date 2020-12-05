import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbars from "./Navbars";
import BitcoinDetails from "./BitcoinDetails";
import Calculator from "./Calculator";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route path="/details">
          <BitcoinDetails />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
