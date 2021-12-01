import React from "react";

//css
import styles from "./coin.module.css";

const Coin = ({ data }) => {
  const { image, name, symbol, price_change_24h, market_cap, current_price } =
    data;

  return (
    <div className={styles.container}>
      <img src={image} alt="coin" />
      <span className={styles.name}> {name} </span>
      <span className={styles.symbol}> {symbol.toUpperCase()} </span>
      <span className={styles.price}> {current_price.toLocaleString()} $</span>
      <span className={price_change_24h > 0 ? styles.green : styles.red}>
        {" "}
        {price_change_24h.toFixed(2)} %
      </span>
      <span> {market_cap.toLocaleString()} $</span>
    </div>
  );
};

export default Coin;
