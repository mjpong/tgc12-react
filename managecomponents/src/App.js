import React from 'react';
import Form from "./Form";
import Confirmation from "./Confirmation";
import './App.css';


export default class App extends React.Component {
  state = {
    username: "",
    email: "",
    submitted: false
  };



  updateFormField = (event) => {
    this.setState ({
      [event.target.name]: event.target.value
    });
  };

  confirmUpdate = (event) => {
    this.setState({
      submitted: true
    })
  };



  render(){
    return (
      <React.Fragment>
        {this.state.submitted === false ? (
          <Form
            username={this.state.username}
            email={this.state.email}
            updateFormField={this.updateFormField}
            confirm={this.confirmUpdate}
          />
        ):(
          <Confirmation 
            username={this.state.username}
            email={this.state.email}
          />
        )}
      </React.Fragment>
    );
  }


}
