import React from "react"

class SurveyForm extends React.Component {
    state = {
        'name': '',
        'color': 'red',
        'country': 'singapore',
        'items': []
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateCheckBox = (e) => {
        let currentValues = this.state[e.target.name];
        let modifiedValues;

        console.log(currentValues);
        if (!currentValues.includes(e.target.value)) {
            modifiedValues = [...currentValues, e.target.value]
        } else {
            console.log("Start filter")
            modifiedValues = currentValues.filter((element) => {
                console.log(element);
                return element !== e.target.value
            })
        }

        console.log(modifiedValues);

        this.setState({
            [e.target.name]: modifiedValues
        })
    }

    showFormValue = (e) => {
        let name = this.state.name;
        let color = this.state.color;
        let country = this.state.country;
        alert(
            name + ", " + color + ", " + country
        )
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Name: </label>
                    <input name="name" type="text" value={this.state.name} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Color: </label>
                    <input type="radio" name="color" value="red"
                        checked={this.state.color === "red"}
                        onChange={this.updateFormField} />Red
                    <input type="radio" name="color" value="green"
                        checked={this.state.color === "green"}
                        onChange={this.updateFormField} />Green
                    <input type="radio" name="color" value="blue"
                        checked={this.state.color === "blue"}
                        onChange={this.updateFormField} />Blue
                </div>
                <div>
                    <label>Country: </label>
                    <select name="country" value={this.state.country} onChange={this.updateFormField}>
                        <option value="singapore">Singapore</option>
                        <option value="indonesia">Indonesia</option>
                        <option value="malaysia">Malaysia</option>
                    </select>
                </div>
                <div>
                    <label>Items: </label>
                    <input type="checkbox"
                        name="items" value="passport"
                        checked={this.state.items.includes('passport')} 
                        onChange={this.updateCheckBox} />Passport
                    <input type="checkbox"
                        name="items" value="visa"
                        checked={this.state.items.includes('visa')} 
                        onChange={this.updateCheckBox} />Visa
                    <input type="checkbox"
                        name="items" value="luggage"
                        checked={this.state.items.includes('luggage')} 
                        onChange={this.updateCheckBox}/>Luggage
                    <input type="checkbox"
                        name="items" value="money"
                        checked={this.state.items.includes('money')}
                        onChange={this.updateCheckBox} />Money
                </div>
                <button onClick={this.showFormValue}>Submit</button>
            </React.Fragment >
        )
    }
}

export default SurveyForm