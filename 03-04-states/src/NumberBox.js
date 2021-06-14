import React from "react"

class NumberBox extends React.Component {

    state= {
        count: 0
    }

    click = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <React.Fragment>
                <div onClick={this.click} style={{
                    border: "1px solid black",
                    padding: "10px",
                    width: "20px"
                }}>{this.state.count}</div>
                { this.state.count % 2 === 0 ? <p>Number is Even</p>: <p>Number is Odd</p>}
            </React.Fragment>
        )

    }
}

export default NumberBox