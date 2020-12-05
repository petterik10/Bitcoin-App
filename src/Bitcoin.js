import React from "react";
import PricingData from "./PricingData";

export default function Bitcoin({ currency, data }) {
  return (
    <div className="currency-box">
      <h3> Currency: {currency}</h3>
      {data.map((elem) => {
        return (
          <PricingData
            key={elem}
            purchaseprice={elem.buy}
            sellingprice={elem.sell}
          />
        );
      })}
    </div>
  );
}
