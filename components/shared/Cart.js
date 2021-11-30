import React, { useContext } from "react";
//context
import { CartContext } from "../../context/CartContextProvider";
//functions
import { shorten } from "../../helpers/functions";

const Cart = ({ data }) => {
  const { state, dispatch } = useContext(CartContext);

  const { image, title, price, quantity, category } = data;

  return (
    <div>
      <img src={image} alt="product" style={{ width: "100px" }} />
      <h2> {shorten(title)} </h2>
      <p>
        category: <span>{category}</span>
      </p>
      <p>
        Items: <span>{quantity} </span>
      </p>
      <p> {price} $ </p>
      <div>
        {quantity > 1 ? (
          <button onClick={() => dispatch({ type: "DECREASE", payload: data })}>
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
          >
            R
          </button>
        )}
        {
          <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>
            +
          </button>
        }
      </div>
    </div>
  );
};

export default Cart;
