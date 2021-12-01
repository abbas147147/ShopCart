import React, { useContext } from "react";
//context
import { CartContext } from "../../context/CartContextProvider";
//functions
import { shorten } from "../../helpers/functions";
//icons
import trash from "../../assets/icons/trash.svg";
//css
import styles from "./cart.module.css";

const Cart = ({ data }) => {
  const { state, dispatch } = useContext(CartContext);

  const { image, title, price, quantity, category } = data;

  return (
    <div className={styles.container}>
      <img src={image} alt="product" />
      <h2> {shorten(title)} </h2>
      <p className={styles.category}>
        category: <span>{category}</span>
      </p>
      <p className={styles.iCounter}>
        Items: <span>{quantity} </span>
      </p>
      <p className={styles.priceTag}> {price} $ </p>
      <div className={styles.buttonsContainer}>
        {quantity > 1 ? (
          <button onClick={() => dispatch({ type: "DECREASE", payload: data })}>
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
          >
            <img src={trash} alt="trash" style={{ width: "20px" }} />
          </button>
        )}
        {quantity && <span className={styles.Quantity}>{quantity}</span>}
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
