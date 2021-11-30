import React, { useContext } from "react";

//context
import { CartContext } from "../../context/CartContextProvider";
//functions
import { shorten, isInCart, quantityCounter } from "../../helpers/functions";
//link
import { Link } from "react-router-dom";
//icon
import trash from "../../assets/icons/trash.svg";

const Product = ({ productData }) => {
  const { image, price, title, id } = productData;
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <img src={image} alt="product" style={{ width: "200px" }} />
      <h2> {shorten(title)} </h2>
      <p> {price} $</p>
      <Link to={`/products/${id}`}>Details</Link>
      <div>
        {quantityCounter(state, id) === 1 && (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productData })
            }
          >
            <img src={trash} alt="trash" style={{ width: "20px" }} />
          </button>
        )}
        {quantityCounter(state, id) > 1 && (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: productData })}
          >
            -
          </button>
        )}
        {isInCart(state, id) ? (
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: productData })}
          >
            +
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
