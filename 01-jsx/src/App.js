import React from "react"
// const React = require('react')
import burger from "./cheeseburger.jpeg"
import ljs from "./ljslogo.png"

import "./App.css"



function App() {
  return (
    <React.Fragment>
      <p style= {{
        "color": "red", 
        "backgroundColor": "purple"
      }}>Hello World</p>
      <p>Another Hello</p> 
      <AlertBox message="AWAS!" color="blue"></AlertBox>
      <AlertBox message="Hello from the other side"></AlertBox>
      <Invert number = {3}/>
      <img src = {require("./happy.jpeg").default}/>
      <BorderedImageFrame image={ljs}/>
      <BorderedImageFrame image={burger}/>
      <AddTwo n1={2} n2={3}/>
   
    </React.Fragment>
  );
}

// component instance <AlertBox></AlertBox> act as HTML tag

//component 
function AlertBox(props) {
  console.log(props)
  let textColor = props.color || "red"
  return (
    <React.Fragment>
      <div style={{"color": textColor}}>
        {props.message}
      </div>

    </React.Fragment>
  )
}

function Invert(props){
  return (
    <React.Fragment>
      <p>{props.number * -1}</p>
    </React.Fragment>
  )
}

function BorderedImageFrame(props){
  return (
    <div style ={{
      borderColor: "red",
      borderStyle: "solid",
      borderWidth: "4px"
    }}>
      <img src={props.image}></img>
    </div>
  )
}

function AddTwo(props) {
  let sum = props.n1 + props.n2;
  return (
    <React.Fragment>
      <p>Sum is {sum}</p>
    </React.Fragment>
  )
}

export default App;
