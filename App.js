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
//registration
import Login from "./SignUp&Login/Login";
import SignUp from "./SignUp&Login/SignUp";
//Crypto
import CoinStore from "./crypto/CoinStore";
//css
import styles from "./app.css";

const App = () => {
  return (
    <div className={styles.app}>
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route path="/coin" component={CoinStore} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
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
