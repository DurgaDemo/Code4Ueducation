import React, { Component } from "react";

export class ComponentDidUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("constructor Calling");
  }

  IncrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    console.log("componentDidMount Calling");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate calling");
  }

  render() {
    console.log("Render Calling");
    return (
      <div>
        <h2>ComponentDidUpdate in React</h2>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.IncrementCount}>change</button>
      </div>
    );
  }
}

export default ComponentDidUpdate;
