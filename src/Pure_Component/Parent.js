import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

constructor(props) {
  super(props)

  this.state = {
     count:0
  }
}

handleIncrement=()=>{
  this.setState({
    // count: this.state.count+1
  })
}

// OR

// handleIncrement=()=>{
//   this.setState((prevState)=>({
//     count: prevState.count+1
//   }))
// }
  render() {
    console.log("Parent Component Calling");
    return (
      <div>
        <h2>PureComponent in React</h2>
        <Child count={this.state.count} onIncrement={this.handleIncrement}/>
      </div>
    )
  }
}

export default Parent