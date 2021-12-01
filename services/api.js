import axios from "axios";

const Product_URL = "https://fakestoreapi.com";

const getProduct = async () => {
  const response = await axios.get(`${Product_URL}/products`);
  return response.data;
};
const CoinURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const getCoin = async () => {
  const response = await axios.get(CoinURL);
  return response.data;
};

export { getProduct, getCoin };
