// import React from 'react'

// function Child(props) {

//     props.user.firstName="Rakesh"
//   return (
//     <div>
//         {props.user.map((val)=>{
//             return(
//                 <>
//                 <li>{val.firstName}</li>
//                 <li>{val.lastName}</li>
//                 <li>{val.age}</li>
//                 </>
//             )
//         })}
//     </div>
//   )
// }

// export default Child


/*----------------------------------------------------*/


// import React from 'react'

// function Child(props) {

//     // props.user.firstName="Rakesh"
//   return (
//     <div>
//         <ul>
//             <li>{props.user.firstName}</li>
//             <li>{props.user.lastName}</li>
//             <li>{props.user.age}</li>
//         </ul>
//     </div>
//   )
// }
// export default Child


/*-------------------------------------------------------------------------*/

// import React from 'react'

// function Child({user}) {
//   return (
//     <div>
//         {user.map((val)=>{
//             return(
//                 <>
//                 <li>{val.firstName}</li>
//                 <li>{val.lastName}</li>
//                 <li>{val.age}</li>
//                 </>
//             )
//         })}
//     </div>
//   )
// }

// export default Child


/*--------------------------------------------------------*/



import React from 'react'

function Child({user}) {
    // user.firstName="Rakesh"
  return (
    <div>
        <ul>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
        </ul>
    </div>
  )
}

export default Child




