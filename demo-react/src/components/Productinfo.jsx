import React from 'react'
const info={
    name: "Laptop",
    price: 1200,
    avalibility: "In stock"
}
const numbers = [1,2,3,4,5]

const Productinfo = () => {
  return (
    <div>
        <p>Name: {info.name}</p>
        <p>Price: {info.price}</p>
        <p>Avalibility: {info.avalibility}</p>

        <main>
            {numbers.map((num)=>(
                <ul key={num}>
                    <li>{num}</li>
                </ul>
            ))};

        </main>
    </div>
  )
}

export default Productinfo