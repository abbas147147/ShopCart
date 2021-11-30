import React, { useContext } from "react";
import { Link } from "react-router-dom";
//context
import { CartContext } from "../context/CartContextProvider";
//icons
import shop from "../assets/icons/shop.svg";

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div>
      <Link to="/shopcart">
        <img src={shop} alt="shop" style={{ width: "20px" }} />
      </Link>
      <span> {state.itemCounter} </span>
      <div>
        <Link to="/products">
          <h2>Product</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;