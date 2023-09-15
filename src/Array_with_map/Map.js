import React from "react";

function Map() {
  const names = ["Durga", "Rakesh", "Pinku", "Asish"];

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
    },
    {
      id: 2,
      name: "Product 2",
      price: 30,
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
    },
    {
      id: 4,
      name: "Product 4",
      price: 40,
    },
  ];

  return (
    <div>
      <h2>Array With Map Method</h2>

      <ul>
        {names.map((values, index) => {
          return (
            <>
              <li key={index}>{values}</li>
            </>
          );
        })}
      </ul>
      {/* ----------------------------------------------------------------- */}

      <ul>
        {products.map((val) => {
          return (
            <>
              <li>{val.id}</li>
              <li>{val.name}</li>
              <li>{val.price}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Map;
