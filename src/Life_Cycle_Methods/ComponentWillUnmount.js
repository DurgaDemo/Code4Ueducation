import React, { Component } from 'react'

export class ComponentWillUnmount extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         show:true
      }
    }

    componentDidMount(){
        this.interValid=setInterval(()=>{
         console.log("Interval Trick");
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.interValid)
        console.log("Interval Trick removed");
    }

    changeState=()=>{
        this.setState({
            show:!this.state.show
        })
    }

  render() {
    return (
      <div>
        <h2>ComponentWillUnmount in React</h2>
        <button onClick={this.changeState}>Removed Component</button>
      </div>
    )
  }
}

export default ComponentWillUnmount