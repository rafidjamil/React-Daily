import React from "react";
import "./Recommended.css";
import Button from "../components/Button";

const Recommended = ({handleclick}) => {
  return (
    <>
      <div>
        <h1 className="recommended-title">Recommended</h1>
        <div className="recommended-flex">
          {/* <button className="btns">All Products</button> */}
          {/* <button className="btns">Nike</button>
          <button className="btns">Addidas</button>
          <button className="btns">Puma</button>
          <button className="btns">Vans</button> */}
          <Button onClickHandler={handleclick} value="" title="All Products"  />

          <Button onClickHandler={handleclick} value="Nike" title="Nike" />
          <Button
            onClickHandler={handleclick}
            value="Adidas"
            title="Adidas"
          />
          <Button onClickHandler={handleclick} value="Puma" title="Puma" />
          <Button onClickHandler={handleclick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
