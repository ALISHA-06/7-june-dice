import React, { Component } from "react";

class Die extends Component {
  render() {
    return (
      <div>
        <i
          className={`Die fa-solid fa-dice-${this.props.face} ${
            this.props.rolling ? "shaking" : ""
          }`}
        ></i>
      </div>
    );
  }
}
export default Die;
