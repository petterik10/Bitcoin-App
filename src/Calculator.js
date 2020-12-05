import React, { useRef, useState, useEffect } from "react";

export default function Calculator() {
  const currencies = ["EUR", "USD", "AUD", "NZD", "GBP"];
  const currencyRef = useRef();
  const [currencyValue, setCurrencyValue] = useState("");
  const [query, setQuery] = useState("");
  const [currencyRefNum, setCurrencyRefNum] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    async function fetchBTCsum() {
      try {
        const response = await fetch(
          `https://blockchain.info/tobtc?currency=${currencyRefNum}&value=${query}`
        );
        const sum = await response.json();
        setResult(sum);
      } catch (err) {
        console.log(err);
      }
    }

    if (query !== "") {
      fetchBTCsum();
    }
  }, [query, currencyRefNum]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(currencyValue);
    setCurrencyRefNum(currencyRef.current.value);
  };

  const handleChange = (e) => {
    setCurrencyValue(e.target.value);
  };

  return (
    <div>
      <h2 className="header-calculator">Convert currencies to Bitcoins</h2>
      <form className="btc-form" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-group-select">
            <label htmlFor="currencies">Currency: </label>
            <select id="currency" ref={currencyRef}>
              {currencies.map((currency) => {
                return (
                  <option value={currency} key={currency}>
                    {currency}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group-input">
            <label htmlFor="amount">Value: </label>
            <input
              onChange={handleChange}
              type="number"
              id="amount"
              min="1"
              placeholder={500}
            ></input>
          </div>
        </div>
        <div className="btn">
          <button>Convert</button>
        </div>
      </form>
      <div className="result">
        {result !== "" && `${query} ${currencyRefNum} is ${result} BTC`}
      </div>
    </div>
  );
}
