import React from "react"


function ImageFrame(){
    return(
      <img src={require('./happy.jpeg').default}/>
    )
}

export default ImageFrame;