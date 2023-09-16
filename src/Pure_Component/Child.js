import React, {PureComponent } from 'react'

export class Child extends PureComponent {
  render() {
    console.log("Child Component Calling");
    return (
      <div>
        <h2>Counter:{this.props.count}</h2>
        <button onClick={this.props.onIncrement}>Increment</button>
      </div>
    )
  }
}

export default Child