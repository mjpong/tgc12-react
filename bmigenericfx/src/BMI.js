import React from "react";

export default class BMI extends React.Component {
  state = {
    weight: 0,
    height: 0,
    bmi: 0
  };

  handleChange = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value
    });
    this.calculateBMI();
  };

  /*
  updateWeight = async (event) => {
    await this.setState({
      weight: event.target.value
    });
    this.calculateBMI();
  };

  updateHeight = async (event) => {
    await this.setState({
      height: event.target.value
    });
    this.calculateBMI();
  };
*/
  calculateBMI = () => {
    if (this.state.weight > 0 && this.state.height > 0) {
      this.setState({
        bmi: parseFloat(this.state.weight) / parseFloat(this.state.height ** 2)
      });
    }
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
            onChange={this.handleChange}
            name="weight"
          />
        </div>
        <div>
          <label>Height</label>
          <input
            type="text"
            value={this.state.height}
            onChange={this.handleChange}
            name="height"
          />
        </div>
        {bmiDisplay}
        {this.displayBMI()}
        {this.state.bmi > 0 ? <h1>Your BMI is {this.state.bmi}</h1> : null}
      </React.Fragment>
    );
  }
}
