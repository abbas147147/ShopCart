import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";
//components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import CartShop from "./components/CartShop";

const App = () => {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route path="/shopcart" component={CartShop} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Store} />
            <Redirect to="/products" />
          </Switch>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
};

export default App;
