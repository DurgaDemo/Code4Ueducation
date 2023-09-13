// import React from 'react'

// function Jsx() {
//   return (
//     <div>
//         <h2>Jsx in React Js</h2>

//     </div>
//   )
// }

// export default Jsx

/*--------------------------------------*/

import React from 'react'

function Jsx() {
  return (
    React.createElement("h2",null,"Jsx in React Js",React.createElement("p",{className:"demo"},"Jsx in P tag"))
  )
}

export default Jsx