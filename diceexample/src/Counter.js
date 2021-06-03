import React from "react";

// a component class with the name `Counter`
export default class Counter extends React.Component {
  state = {
    count: this.props.startingNumber
  };

  increment = () => {
    // CANNOT UPDATE THE STATE DIRECTLY!!!
    // (aka cannot MUTATE the state)
    this.setState({
      count: this.state.count + 1
    });
  };

  // the render function must EXIST in the component
  // and MUST return JSX
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: "1px solid black",
            width: "40px",
            height: "40px",
            textAlign: "center"
          }}
        >
          {this.state.count}
        </div>
        <button onClick={this.increment}>+</button>
      </React.Fragment>
    );
  }
}
