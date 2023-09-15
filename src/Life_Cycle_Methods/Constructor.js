import React, { Component } from 'react'

export class Constructor extends Component {

constructor(props) {
  super(props)
    console.log("Constructor Method Called");
}

  render() {
    console.log("Render Method Called");
    return (
      <div>
        <h2>Constructor In React Js</h2>
      </div>
    )
  }
}

export default Constructor