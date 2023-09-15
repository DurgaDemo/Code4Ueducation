import React, { Component } from "react";

export class Render extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      firstName: "Durga",
      age: 30,
    };
    console.log("Constructor Calling");

  }


  ChangeState=()=>{
  this.setState({
    firstName: "Rakesh",
    age: 50,
  })
  }

  render() {
    console.log("Render method calling");
    return (
      <div>
        <h2>Render method in React</h2>
        <h3>{this.state.firstName} {this.state.age}</h3>
        <button onClick={this.ChangeState}>Change</button>
      </div>
    );
  }
}

export default Render;
