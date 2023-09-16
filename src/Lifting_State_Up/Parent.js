import React, { useState } from 'react'
import Child from './Child'
import Child1 from './Child1'
function Parent() {

const [sharedState,setShareadState]=useState('')


// const data="Durga Mohapatra"

const handleChange=(newValue)=>{
    setShareadState(newValue)
}

  return (
    <div>
        {/* <Child data={data}/> */}
         <Child sharedState={sharedState} handleChange={handleChange}/>
         <Child1 sharedState={sharedState}/>
    </div>
  )
}

export default Parent