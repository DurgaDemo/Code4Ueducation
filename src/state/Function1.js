// import React, { useState } from 'react'

// function Function1() {

// const [data,setData]=useState("code4ueducation")

// function UpdataData(){
//     setData("Bhaskhar Gupta")
// }

//   return (
//     <div>
//         <h2>Changing State in React</h2>
//         <h3>{data}</h3>
//         <button onClick={UpdataData}>Change</button>
//     </div>
//   )
// }

// export default Function1



/*----------------------------------------------------*/



import React, { useState } from 'react'

function Function1() {

const [data,setData]=useState([{
    firstName:"Durga",
    lastName:"Mohapatra",
    age:30
}])

const result=data.map((value)=>{
        return(
            <>
            <ul>
                <li>{value.firstName}</li>
                <li>{value.lastName}</li>
                <li>{value.age}</li>
            </ul>
            </>
        )
})

function UpdataData(){
    setData([{
        firstName:"Rakesh",
        lastName:"Das",
        age:50
    }])
}

  return (
    <div>
        <h2>Changing State in React</h2>
        <h3>{result}</h3>
        <button onClick={UpdataData}>Change</button>
    </div>
  )
}

export default Function1