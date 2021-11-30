import React, { useContext } from "react";

//context
import { ProductContext } from "../context/ProductsContextProvider";
//components
import Product from "./shared/Product";

const Store = () => {
  const product = useContext(ProductContext);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {product.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Store;
