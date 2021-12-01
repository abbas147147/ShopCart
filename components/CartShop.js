import React, { useContext } from "react";
//context
import { CartContext } from "../context/CartContextProvider";
//components
import Cart from "./shared/Cart";
//link
import { Link } from "react-router-dom";
//css
import styles from "./cartShop.module.css";

const CartShop = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      {state.selectItem.map((item) => (
        <Cart key={item.id} data={item} />
      ))}
      {state.itemCounter > 0 && (
        <div className={styles.calculator}>
          <p className={styles.counter}>
            Total products : <span> {state.itemCounter} </span>
          </p>
          <p className={styles.sum}>
            Total Payments : <span> {state.total} $</span>
          </p>
          <div className={styles.ButtonContainer}>
            <button
              onClick={() =>
                dispatch({ type: "CHECKOUT", payload: state.selectItem })
              }
            >
              Checkout
            </button>
            <button
              onClick={() =>
                dispatch({ type: "CLEAR", payload: state.selectItem })
              }
            >
              Clear
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.finish}>
          <h2>checkout successfully</h2>
          <Link to="/products">Buy More</Link>
        </div>
      )}
      {!state.checkout && state.itemCounter === 0 && (
        <div className={styles.finish}>
          <h2>Clear successfully</h2>
          <Link to="/products">Do you want buy!</Link>
        </div>
      )}
    </div>
  );
};

export default CartShop;
