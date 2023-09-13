import React, { useState } from "react";
import "./User.css";

function User() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h2>Hide Show And Toggle in React</h2>

      {status ? <div className="status">Content</div> : null}

      <button onClick={() => {setStatus(false) }}>Hide</button>
      <button onClick={() => { setStatus(true) }}>Show</button>
       <br/>
      <button onClick={()=>{setStatus(!status)}}>Toggle</button>

    </div>
  );
}

export default User;
