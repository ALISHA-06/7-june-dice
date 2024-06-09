import React, { Component } from "react";
import Die from "./Die";

class Rolldice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", rolling: false };
    this.randomDice = this.randomDice.bind(this);
  }
  randomDice() {
    const randomDie1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    const randomDie2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    //..
    this.setState({ die1: randomDie1, die2: randomDie2, rolling: true });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.randomDice} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll dice"}
        </button>
      </div>
    );
  }
}

export default Rolldice;
