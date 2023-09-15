import React, { Component } from "react";

export class ComponentDidMount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("Constructor Calling");
  }

  IncrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    console.log("ComponentDidMount Calling");
  }

  render() {
    console.log("Render Calling");
    return (
      <div>
        <h2>ComponentDidMount in React</h2>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.IncrementCount}>Click</button>
      </div>
    );
  }
}

export default ComponentDidMount;
