import React, { useContext } from "react";

//context
import { ProductContext } from "./../context/ProductsContextProvider";
//functions
import { shorten } from "../helpers/functions";
//Link
import { Link } from "react-router-dom";
//css
import styles from "./productDetails.module.css";

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductContext);
  const product = data[id - 1];
  const { price, image, description, title, category } = product;
  return (
    <div className={styles.container}>
      <img src={image} alt="product" className={styles.image} />
      <div className={styles.detail}>
        <h3> {title} </h3>
        <p className={styles.description}> {description} </p>
        <p className={styles.category}>
          <span>category: {category} </span>
        </p>
        <div className={styles.buttonsContainer}>
          <span> {price} $</span>
          <Link to="/products">Back To Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
