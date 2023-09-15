import React from 'react'
import './User.css'
import user from './User.module.css'

function User() {


const headline={
    color:"#fff",
    backgroundColor:"blue"
}

  return (
    <div>

        {/* Inline Style */}
        <h2 style={{color:"#fff",backgroundColor:"green"}}>Applying Style in React</h2>
         {/* External Style */}
        <h2 className='demo'>Applying Style in React</h2>
          {/* css in Js Method */}
        <h2 style={headline}>Applying Style in React</h2>
         {/* css Module Method */}
        <h2 className={user.title}>Applying Style in React</h2>
    </div>
  )
}

export default User