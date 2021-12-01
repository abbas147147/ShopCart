import React, { useContext } from "react";

//context
import { CartContext } from "../../context/CartContextProvider";
//functions
import { shorten, isInCart, quantityCounter } from "../../helpers/functions";
//link
import { Link } from "react-router-dom";
//icon
import trash from "../../assets/icons/trash.svg";
import styles from "./product.module.css";

const Product = ({ productData }) => {
  const { image, price, title, id } = productData;
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <img src={image} alt="product" className={styles.mainIMG} />
      <h2> {shorten(title)} </h2>
      <p> {price} $</p>

      <div className={styles.linkContainer}>
        <Link to={`/products/${id}`}>Details</Link>
        <div className={styles.buttonsContainer}>
          {quantityCounter(state, id) === 1 && (
            <button
              className={styles.smallButtons}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={trash} alt="trash" />
            </button>
          )}
          {quantityCounter(state, id) > 1 && (
            <button
              className={styles.smallButtons}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCounter(state, id) && (
            <span className={styles.spn}>{quantityCounter(state, id)}</span>
          )}
          {isInCart(state, id) ? (
            <button
              className={styles.smallButtons}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
