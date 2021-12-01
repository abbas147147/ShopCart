import React, { useContext } from "react";

//context
import { ProductContext } from "../context/ProductsContextProvider";
//components
import Product from "./shared/Product";
//css
import styles from "./store.module.css";

const Store = () => {
  const product = useContext(ProductContext);

  return (
    <div className={styles.container}>
      {product.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Store;
