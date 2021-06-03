import React from "react";

export default class BookingForm extends React.Component {
  state = {
    seating: "private-room",
    meal: "supper"
  };

  updateSeating = (event) => {
    this.setState({
      seating: event.target.value
    });
  };

  updateMeal = (event) => {
    this.setState({
      meal: event.target.value
    });
  };

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          Choose your seating:
          <p>
            <input
              type="radio"
              name="seating"
              value="outdoors"
              onChange={this.updateSeating}
              checked={this.state.seating === "outdoors"}
            />
            <span>Outdoors</span>
            <input
              type="radio"
              name="seating"
              value="indoors"
              onChange={this.updateSeating}
              checked={this.state.seating === "indoors"}
            />
            <span>Indoors</span>
            <input
              type="radio"
              name="seating"
              value="private-room"
              onChange={this.updateSeating}
              checked={this.state.seating === "private-room"}
            />
            <span>Private room</span>
          </p>
        </div>
        <div>
          <p>Select meal:</p>
          <select
            name="meal"
            value={this.state.meal}
            onChange={this.updateMeal}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="high-tea">High Tea</option>
            <option value="dinner">Dinner</option>
            <option value="supper">Supper</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}
