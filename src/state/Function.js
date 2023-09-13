import React from 'react'

function Function() {

let data="code4ueducation"

function UpdataData(){
    data="Bhashkar Gupta"
    alert(data)
}

  return (
    <div>
        <h2>Changing State in React</h2>
        <h3>{data}</h3>
        <button onClick={UpdataData}>Change</button>
    </div>
  )
}

export default Function