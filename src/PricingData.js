import React from "react";

export default function PricingData({ purchaseprice, sellingprice }) {
  return (
    <div>
      <p> Purchase price: {purchaseprice}</p>
      <p> Selling price: {sellingprice}</p>
    </div>
  );
}
