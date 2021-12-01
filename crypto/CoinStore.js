import React, { useState, useEffect } from "react";

//api
import { getCoin } from "../services/api";
//shared
import Coin from "./shared/Coin";
import Loader from "./Loader";
//css
import styles from "./coinStore.module.css";

const CoinStore = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setCoin(await getCoin());
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  const searchCoin = coin.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.inp}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={searchHandler}
        />
      </div>
      {coin.length ? (
        <div>
          {" "}
          {searchCoin.map((item) => (
            <Coin key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CoinStore;
