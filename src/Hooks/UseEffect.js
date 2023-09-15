import React, { useEffect, useState } from "react";

function UseEffect() {

  const [count,setCount]=useState(0)

  const [user, setuser] = useState([
    {
      firstName: "Durga",
      lastName: "Mohapatra",
      age: 30,
    },
  ]);

  const result = user.map((value) => {
    return (
      <>
        <ul>
          <li>{value.firstName}</li>
          <li>{value.lastName}</li>
          <li>{value.age}</li>
        </ul>
      </>
    );
  });

  function ChangeStateValue() {
    setuser([
      {
        firstName: "Rakesh",
        lastName: "Das",
        age: 50,
      },
    ]);
  }

  function ChangeCount(){
    setCount(count+1)
  }

  useEffect(() => {
    console.log("useEffect is calling");
  },[user]);

  return (
    <div>
      <h2>UseEffect in React</h2>
      {result}
      <button onClick={ChangeStateValue}>Change Value</button>
      <hr/>
      <h3>Count:{count}</h3>
      <button onClick={ChangeCount}>Button</button>
    </div>
  );
}

export default UseEffect;
