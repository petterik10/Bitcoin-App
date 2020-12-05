import React, { useState, useEffect } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { Table } from "react-bootstrap";

export default function BitcoinDetails() {
  const [data, setData] = useState({
    marketcap: "",
    totalbc: "",
    transactionCount: "",
    btcSent: "",
    hashRate: "",
    getDifficulty: "",
  });
  useEffect(() => {
    Promise.all([
      fetch("https://blockchain.info/q/marketcap"),
      fetch("https://blockchain.info/q/totalbc"),
      fetch("https://blockchain.info/q/24hrbtcsent"),
      fetch("https://blockchain.info/q/24hrtransactioncount"),
      fetch("https://blockchain.info/q/hashrate"),
      fetch("https://blockchain.info/q/getdifficulty"),
    ]).then(async ([a, b, c, d, e, f]) => {
      const marketcap = await a.text();
      const bc = await b.text();
      const tc = await c.text();
      const btcent = await d.text();
      const hr = await e.text();
      const gd = await f.text();
      setData({
        marketcap: marketcap,
        totalbc: bc,
        transactionCount: tc,
        btcSent: btcent,
        hashRate: hr,
        getDifficulty: gd,
      });
    });
  }, []);
  return (
    <Table striped bordered hover variant="light">
      <TableHead />
      <tbody>
        <TableRow description="Market Capitalization" value={data.marketcap} />
        <TableRow
          description="Total Bitcoins in circulation"
          value={data.totalbc}
        />
        <TableRow
          description="Number of transactions in the past 24 hours"
          value={data.transactionCount}
        />
        <TableRow
          description="Number of btc sent in the last 24 hours"
          value={data.btcSent}
        />
        <TableRow
          description=" Estimated network hash rate in gigahash"
          value={data.hashRate}
        />
        <TableRow
          description="Current difficulty target as a decimal number"
          value={data.getDifficulty}
        />
      </tbody>
    </Table>
  );
}
