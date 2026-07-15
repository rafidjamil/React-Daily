import React from "react";
const productlist = [
  {
    id: 1,
    name: "Phone",
    price: "$600",
  },
  {
    id: 2,
    name: "laptop",
    price: "$6000",
  },
  {
    id: 4,
    name: "headphone",
    price: "$150",
  },
];
const Productlis = () => {
  return (
    <div>
        <hr />
        <h1>Product lists</h1>
      {productlist.map((p) => (
        <ul key={p.id}>
          <li>{p.name}</li>
          <li>{p.price}</li>
        </ul>
      ))}
    </div>
  );
};

export default Productlis;
