import React, { useMemo, useState } from "react";

function UseMemo() {


const [number1,setNumber1]=useState(0)
const [number2,setNumber2]=useState(0)
const [count,setCount]=useState(0)


const sum=useMemo(()=>{
        console.log("Calculating Sum....");
        return number1+number2
    },[number1,number2])



  return (
    <div>
      <h2>UseMemo in React Js</h2>

      <input type="number" value={number1} onChange={(e)=>{setNumber1(Number(e.target.value))}}/><br/>
      <input type="number" value={number2} onChange={(e)=>{setNumber2(Number(e.target.value))}}/>

      {/* <p>Sum: {sum()}</p> */}

      <p>Sum: {sum}</p>

      <hr/>
      <h2>Count Number: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Click ++</button>
    </div>
  );
}

export default UseMemo;
