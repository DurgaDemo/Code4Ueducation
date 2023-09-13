import React, { useState } from "react";

function Form() {

const [Formdata,setFormData]=useState({
    username:'',
    email:'',
    password:'',
    isSubscribed:'',
    role:''
    
})


function handleChange(event){
    const {name,value,type,checked}=event.target
    const fieldValue = type==='checkbox' ? checked:value

    setFormData({
        ...Formdata,
        [name]:fieldValue
    })
}

function handleSubmit(event){
     event.preventDefault()
     console.log('Form Data',Formdata);
}

  return (
    <div>
      <h2>Form Handling in React</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">UserName:</label>
          <input type="text" id="username" name="username" value={Formdata.username} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={Formdata.email} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" name="password" value={Formdata.password} onChange={handleChange} />
        </div>


        <div>
          <label htmlFor="isSubscribed">Subscribe:</label>
          <input type="checkbox" id="isSubscribed" name="isSubscribed" value={Formdata.isSubscribed} onChange={handleChange} />
        </div>

        
        <div>
          <label htmlFor="role">Role:</label>
          <select id="role" name="role" value={Formdata.role} onChange={handleChange}>
          <option>Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
