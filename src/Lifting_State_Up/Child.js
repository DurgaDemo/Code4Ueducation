import React from 'react'

function Child({sharedState, handleChange}) {

const handleInputChange=(event)=>{
    const newValue=event.target.value
    handleChange(newValue)
}

  return (
    <div>
        {/* <h2>{props.data}</h2> */}
        <input type='text' value={sharedState} onChange={handleInputChange}/>
    </div>
  )
}

export default Child