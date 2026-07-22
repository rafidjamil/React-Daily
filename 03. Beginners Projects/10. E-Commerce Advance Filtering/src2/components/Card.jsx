import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import "../Products/Products.css";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star}{star}{star}{star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="revieworprice">
          <div>
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag-icon">
            <BsFillBagHeartFill />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
