import React, { useState } from 'react'

import Child from './Child'

function Memo() {

const [count,setCount]=useState(0)

console.log("Parent Component");

  return (
    <div>
        <h2>Memo in React Js</h2>
        <h3>Count: {count}</h3>
        <button onClick={()=>setCount(count+1)}>Count+</button>
        <Child/>
    </div>
  )
}

export default Memo