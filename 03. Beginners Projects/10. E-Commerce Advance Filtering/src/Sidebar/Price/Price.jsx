import React from "react";
import "./Price.css";

import Input from "../../components/Input";
const Price = ({ handlechange }) => {
  return (
    <div className="sidebar-section">
      <h2 className="sidebar-title">Price</h2>
       <label className="sidebar-label-container">
          <input onChange={handlechange} type="radio" value="" name="price" />
          <span className="checkmark"></span>
          All
        </label>
      <Input
        handlechange={handlechange}
        value={50}
        title="$0 - 50"
        name="price"
      />
      <Input
        handlechange={handlechange}
        value={100}
        title="$50 - 100"
        name="price"
      />
      <Input
        handlechange={handlechange}
        value={150}
        title="$100 - 150"
        name="price"
      />
      <Input
        handlechange={handlechange}
        value={200}
        title="Over $150"
        name="price"
      />
    </div>
  );
};

export default Price;
