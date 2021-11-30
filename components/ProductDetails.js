import React, { useContext } from "react";

//context
import { ProductContext } from "./../context/ProductsContextProvider";
//functions
import { shorten } from "../helpers/functions";
//Link
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductContext);
  const product = data[id - 1];
  const { price, image, description, title, category } = product;
  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h2> {title} </h2>
        <p> {description} </p>
        <p>
          category: <span> {category} </span>
        </p>
        <p> {price} $</p>
        <Link to="/products">Bach To Shop</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
