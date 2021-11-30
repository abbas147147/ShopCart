import React, { useEffect, useState, createContext } from "react";

//API
import { getProduct } from "../services/api";

//context
export const ProductContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProduct(await getProduct());
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={product}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductsContextProvider;
