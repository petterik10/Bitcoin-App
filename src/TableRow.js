import React from "react";

export default function TableRow({ description, value }) {
  return (
    <tr>
      <td>{description}</td>
      <td>{value}</td>
    </tr>
  );
}
