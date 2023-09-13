import React, { Component } from "react";

export class Class extends Component {
  constructor(props) {
    super(props);

    this.state = [
      {
        firstName: "Durga",
        lastname: "Mohapatra",
        age: 30,
      },
    ];
  }


  UpdateData=()=>{
    this.setState({
        firstName: "Rakesh",
        lastname: "Das",
        age: 50,
    }
       
    )
  }

  render() {
    return (
      <div>
        <h2>State in Class component</h2>
        {this.state.map((value) => {
          return (
            <>
              <ol>
                <li>{value.firstName}</li>
                <li>{value.lastname}</li>
                <li>{value.age}</li>
              </ol>
            </>
          );
        })}
         <button onClick={this.UpdateData}>Change</button>
      </div>
    );
  }
}

export default Class;
