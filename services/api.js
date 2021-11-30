import axios from "axios";

const Product_URL = "https://fakestoreapi.com";

const getProduct = async () => {
  const response = await axios.get(`${Product_URL}/products`);
  return response.data;
};
export { getProduct };
