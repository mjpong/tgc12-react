import React from "react"

export default class Fruit extends React.Component {
    state = {
        nameOfFruit: ""
    }

    style = {
        "height": "60px",
        "backgroundColor": "aliceblue",
        "width": "120px"
    }

    render(){
        return(
            <React.Fragment>
                <div style={style}>{this.state.nameOfFruit}</div>
                <button>Apple</button>
                <button>Banana</button>
                <button>Cherry</button>
            </React.Fragment>
        )
    }
}