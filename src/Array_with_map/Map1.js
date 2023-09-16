import React from "react";

function Map1() {
  const CountryswithCities = [
    {
      country: "USA",
      cities: ["New York", "Los Angeles", "Chikago"],
    },
    {
      country: "India",
      cities: ["Delhi", "Mumbai", "Bangalore"],
    },
    {
      country: "UK",
      cities: ["London", "Manchester", "Brimigram"],
    },
  ];

  const result = CountryswithCities.map((value) => {
    return (
      <>
        <ul>
          <li>
            <b>{value.country}</b>
          </li>
          <li>
            {value.cities.map((val) => {
              return <li>{val}</li>;
            })}
          </li>
        </ul>
      </>
    );
  });

  return (
    <div>
      <h2>Nested Map Function</h2>
      {result}
    </div>
  );
}

export default Map1;
