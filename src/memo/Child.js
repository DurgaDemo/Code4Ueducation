import React,{memo} from 'react'

function Child() {

console.log("Child Component");

  return (
    <div></div>
  )
}

export default memo(Child)