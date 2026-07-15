import React from "react";

const Carts = () =>{
const s = ["Wireless airbuds", "Power bank", "New SSD", "Hoddie"];
    return(
        <div>
        <hr />
    <h1>Cart</h1>
    {s.length > 0 && <h2>You have {s.length} s in the cart</h2>}
    <li>
      <h4>Products</h4>
      {s.map((item) => (
          <li key={Math.random}>{item}</li>
        ))}
    </li>
     </div>
    )
};
const Conditonalrend = () => {
  return <Carts />;
};

export default Conditonalrend;
// export default Carts;
