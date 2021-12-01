import React, { useState, useEffect } from "react";

//api
import { getCoin } from "../services/api";
//shared
import Coin from "./shared/Coin";

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
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
      {searchCoin.map((item) => (
        <Coin key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CoinStore;
