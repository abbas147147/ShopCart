import React from "react";

const Coin = ({ data }) => {
  const { image, name, symbol, price_change_24h, market_cap, current_price } =
    data;

  return (
    <div>
      <img src={image} alt="coin" />
      <span> {name} </span>
      <span> {symbol.toUpperCase()} </span>
      <span> {current_price.toLocaleString()} $</span>
      <span> {price_change_24h.toFixed(2)} %</span>
      <span> {market_cap.toLocaleString()} $</span>
    </div>
  );
};

export default Coin;
