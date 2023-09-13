import React from 'react'

import Child from './Child'

function Parent() {

// const user=[{
//   firstName:"Durga",
//   lastName:"Mohapatra",
//   age:30
// }]


const user={
  firstName:"Durga",
  lastName:"Mohapatra",
  age:30
}


  return (
    <div>
        <h2>Props in Function Component</h2>
        <Child user={user}/>
        
    </div>
  )
}

export default Parent