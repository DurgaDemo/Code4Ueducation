import React, { useRef } from 'react'

function UseRef() {

const inputRef=useRef(null)

const handleButtonClick=()=>{
    // const inputValue=inputRef.current.value
      inputRef.current.value="Durga"
      inputRef.current.style.background="green"
      inputRef.current.style.color="white"
}

  return (
    <div>
        <h2>UseRef in React Js</h2>

        <input type='text' ref={inputRef}/>
        <button onClick={handleButtonClick}>Get Input Value</button>
    </div>
  )
}

export default UseRef