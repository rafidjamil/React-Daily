import React from "react";
// import Button from './components/Button'
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import products from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedcategory, setselectedcategory] = useState(null);

  // input filter
  const [query, setquery] = useState("");
  const handleInputChange = (event) => {
    setquery(event.target.value);
  };
  const filteritem = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );
  // Radio button
  const handlechange = (event) => {
    setselectedcategory(event.target.value);
  };
  // filter Button
  const handleclick = (event) => {
    setselectedcategory(event.target.value);
  };
  function filteredData(product, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteritem;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected,
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      ),
    );
  }
  const result = filteredData(products,selectedcategory,query)
  return (
    <div>
      <Sidebar handlechange={handlechange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleclick={handleclick}/>
      <Products result={result}/>
    </div>
  );
};

export default App;
