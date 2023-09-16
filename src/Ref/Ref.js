import React, { Component, createRef } from 'react'

export class Ref extends Component {

constructor(){
    super()
    this.myInputRef=createRef()
}


componentDidMount(){
    this.myInputRef.current.value=""
    // console.log(this.myInputRef.current.value);
}

handleClick=()=>{
    this.myInputRef.current.focus()
    this.myInputRef.current.style.background="green"
    this.myInputRef.current.style.color="white"
}

  render() {
    console.log(this.myInputRef);
    return (
      <div>

        <h2>Ref in class Component in React</h2>
        <input type='text' ref={this.myInputRef}/>
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    )
  }
}

export default Ref