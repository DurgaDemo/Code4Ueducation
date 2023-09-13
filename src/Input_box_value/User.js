import React, { useState } from "react";

function User() {
const [InputValue,setInputValue]=useState("")
const [InputValueshow,setInputValueHide]=useState(false)

  function handleChange(event) {
    setInputValue(event.target.value)
    // console.log(event);
    setInputValueHide(false)
  }

  return (
    <div>
      <h1>Get Input Box Value</h1>
      {/* <h3>{InputValue}</h3> */}
      {/* <input type="text" value={InputValue} onChange={handleChange} /> */}

      <hr/>

      <h3>{InputValueshow ? InputValue:""}</h3>
      <input type="text" value={InputValue} onChange={handleChange} />
      <button onClick={()=>setInputValueHide(true)}>Submit</button>
    </div>
  );
}

export default User;
