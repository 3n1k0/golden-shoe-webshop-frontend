import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart}></Route>
      <Route exact path="/shop/:id" component={ProductPage}></Route>
    </Router>
  );
}

export default App;
