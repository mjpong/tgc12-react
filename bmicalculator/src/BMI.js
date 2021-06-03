import React from "react";

export default class BMI extends React.Component {
  state = {
    weight: 0,
    height: 0,
    bmi: 0
  };

  updateWeight = (event) => {
    console.log(event.target.value);
    this.setState({
      weight: event.target.value
    });
  };

  updateHeight = (event) => {
    this.setState({
      height: event.target.value
    });
  };

  calculateBMI = (event) => {
    this.setState({
      bmi: parseFloat(this.state.weight) / parseFloat(this.state.height ** 2)
    });
  };

  displayBMI() {
    if (this.state.bmi > 0) {
      return (
        <div style={{ backgroundColor: "aliceblue" }}>
          <p>Your BMI is {this.state.bmi}</p>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    let bmiDisplay = null;
    if (this.state.bmi > 0) {
      bmiDisplay = <p>Your BMI is {this.state.bmi}</p>;
    }
    return (
      <React.Fragment>
        <div>
          <label>Weight</label>
          <input
            type="text"
            value={this.state.weight}
            onChange={this.updateWeight}
          />
        </div>
        <div>
          <label>Height</label>
          <input
            type="text"
            value={this.state.height}
            onChange={this.updateHeight}
          />
        </div>
        <button onClick={this.calculateBMI}>Calculate the BMI</button>
        {bmiDisplay}
        {this.displayBMI()}
        {this.state.bmi > 0 ? <h1>Your BMI is {this.state.bmi}</h1> : null}
      </React.Fragment>
    );
  }
}
