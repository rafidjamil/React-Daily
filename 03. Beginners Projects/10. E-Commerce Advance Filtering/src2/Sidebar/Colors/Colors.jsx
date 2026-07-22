import React from "react";
import "./Colors.css";
import Input from "../../components/Input";
const Colors = ({handlechange}) => {
  return (
    <div className="sidebar-section">
      <h2 className="sidebar-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handlechange} type="radio" value="" name="color" />
        <span className="checkmark all"></span>
        All
      </label>
      <Input
        handlechange={handlechange}
        value="black"
        title="Black"
        name="color"
        color="black"
      />
      <Input
        handlechange={handlechange}
        value="blue"
        title="Blue"
        name="color"
        color="blue"
      />
      <Input
        handlechange={handlechange}
        value="red"
        title="Red"
        name="color"
        color="red"
      />
      <Input
        handlechange={handlechange}
        value="green"
        title="Green"
        name="color"
        color="green"
      />

      <label className="sidebar-label-container">
        <input onChange={handlechange} type="radio" value="white" name="color" />
        <span className="checkmark all" style={{background:"white", border: "2px solid black"}}></span>
        White
      </label>
    </div>
    // <div>
    //   <h2 className="sidebar-title-price-title ">Colors</h2>

    //   <label className="sidebar-label-container">
    //     <label className="sidebar-label-container">
    //       <input type="radio" name="test" />
    //       <span className="checkmark"></span>
    //       All
    //     </label>
    //     <label className="sidebar-label-container">
    //       <input type="radio" name="test" />
    //       <span className="checkmark"></span>
    //       Black
    //     </label>
    //     <label className="sidebar-label-container">
    //       <input type="radio" name="test" />
    //       <span className="checkmark"></span>
    //       Blue
    //     </label>
    //     <label className="sidebar-label-container">
    //       <input type="radio" name="test" />
    //       <span className="checkmark"></span>
    //       Red
    //     </label>
    //     <label className="sidebar-label-container">
    //       <input type="radio" name="test" />
    //       <span className="checkmark"></span>
    //       Green
    //     </label>
    //     <label className="sidebar-label-container">
    //       <input type="radio" name="test" />
    //       <span className="checkmark"></span>
    //       White
    //     </label>
    //   </label>
    // </div>
  );
};

export default Colors;
