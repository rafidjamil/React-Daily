import React from "react";

const User = () => {
  return (
    <ShowDetails
      name="Rafid Jamil"
      age={21}
      img="https://lh3.googleusercontent.com/a/ACg8ocIkS8gcvxVFYJB9HAFv0-IaIFWJwsfl1dRYpE4J7d-Vl2owMLZh=s360-c-no"
      email= "rafidjamil010@gmail.com"
      Phone= "+923004179550"
      consistent= {true}
    ></ShowDetails>
  );
};
const ShowDetails = (props) => {
  return (
    <section>
      <h2>{props.name} Information</h2>
        <ul>
            <img src={props.img} alt={props.name} width={100}/>
            <li>Name: {props.name}</li>
            <li>Age: {props.age}</li>
            <li>Mail: {props.email}</li>
            <li>Phone: {props.Phone}</li>
            <li>Consistent: {props.consistent}</li>
        </ul>
    </section>
  );
};

export default User;
