import React from 'react'
import Category from "./Category/Category"
import Price from "./Price/Price"
import Colors from "./Colors/Colors"
import "./Sidebar.css"
import { FaCartShopping } from "react-icons/fa6";

const Sidebar = ({ handlechange }) => {
  // console.log(handlechange);
  
  return (
    <section className='sidebar'>
        <div className='logo-container'>
           <FaCartShopping className='logo'/>
        </div>
        <div>
        <Category handlechange={handlechange} />
        <Price handlechange={handlechange} />
        <Colors handlechange={handlechange} />
        </div>
    </section>
  )
}

export default Sidebar