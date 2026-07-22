import React from "react";
import "./Category.css";

import Input from "../../components/Input";

const Category = ({ handlechange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handlechange} type="radio" value="" name="category" />
          <span className="checkmark"></span>
          All
        </label>
        <Input
          handlechange={handlechange}
          value="sneakers"
          title="Sneakers"
          name="category"
        />
        <Input
          handlechange={handlechange}
          value="flats"
          title="Flats"
          name="category"
        />
        <Input
          handlechange={handlechange}
          value="sandals"
          title="Sandals"
          name="category"
        />
        <Input
          handlechange={handlechange}
          value="heels"
          title="Heels"
          name="category"
        />
      </div>
    </div>
  );
};

export default Category;
