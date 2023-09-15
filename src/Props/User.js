import React, { useState } from "react";
import User1 from "./User1";
function User() {
  const [user, setUser] = useState([
    {
      firstName: "Durga",
      lastName: "Mohapatra",
      age: 30,
    },
  ]);

  const result = user.map((val) => {
    return (
      <>
        <ul>
          <li>{val.firstName}</li>
          <li>{val.lastName}</li>
          <li>{val.age}</li>
        </ul>
      </>
    );
  });

  const handleClick = () => {
    setUser([
      {
        firstName: "Rakesh",
        lastName: "Das",
        age: 50,
      },
    ]);
  };

  // const HandleButtonclick=()=>{
  //     console.log("Button Clicked");
  // }

  return (
    <div>
      <h2>Passing Function As Props</h2>
      {result}
      <User1 click={handleClick} />
      {/* <User1 handleClick={HandleButtonclick}/> */}
    </div>
  );
}

export default User;
