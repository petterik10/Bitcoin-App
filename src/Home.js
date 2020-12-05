import React, { useState, useEffect } from "react";
import Bitcoin from "./Bitcoin";

export default function Home() {
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    async function fetchBitcoins() {
      try {
        const response = await fetch("https://blockchain.info/ticker");
        const json = await response.json();
        const objArray = Object.entries(json).map((elem) => {
          return { name: elem[0], data: [elem[1]] };
        });
        setCurrencyData(objArray);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBitcoins();
  }, []);
  return (
    <div className="container">
      <h1 className="main-header">Bitcoin prices in different currencies</h1>
      <div className="card-grid">
        {currencyData.map((currency) => {
          return (
            <Bitcoin
              key={currency.name}
              currency={currency.name}
              data={currency.data}
            />
          );
        })}
      </div>
    </div>
  );
}
