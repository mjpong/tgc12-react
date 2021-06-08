import React from "react"

class SurveyForm extends React.Component {
    state = {
        'name': '',
        'color': 'red',
        'country': 'singapore',
        'items': [],
        'newColor': 'red',
        'newCountry': '',
        'fruits':[]
    }

    countries = [
        {
            'display': 'Singapore',
            'value': 'singapore'
        },
        {
            'display': 'Malaysia',
            'value': 'malaysia'
        }, {
            'display': 'Indonesia',
            'value': 'indonesia'
        }
    ]
    fruits = [{
        'display': 'Apple',
        'value': 'apple'
    },
    {
        'display': 'Banana',
        'value': 'banana'
    },
    {
        'display': 'Cherries',
        'value': 'cherries'
    }]

    colors = [{
        'display': 'Red',
        'value': 'red'
    },
    {
        'display': 'Green',
        'value': 'green'
    }, {
        'display': 'Blue',
        'value': 'blue',

    }
    ]

    renderColors() {
        let options = [];
        for (let color of this.colors) {
            let e = (
                <React.Fragment key={color.value}>
                    <input name="newColor" type="radio" value={color.value}
                        checked={this.state.newColor === color.value}
                        onChange={this.updateFormField} />
                    <span>{color.display}</span>
                </React.Fragment>
            )
            options.push(e)
        }
        return options;
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
            <React.Fragment >
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
                        onChange={this.updateCheckBox} />Luggage
                    <input type="checkbox"
                        name="items" value="money"
                        checked={this.state.items.includes('money')}
                        onChange={this.updateCheckBox} />Money
                </div>
                <div>
                    <label>Function Render Favorite Color: </label>
                    {this.renderColors()}
                </div>
                <div>
                    <label>Mapping Country: </label>
                    <select name="newCountry" value={this.state.newCountry} onChange={this.updateFormField}>
                        {this.countries.map((c) => <option key={c.value}
                            value={c.value}>{c.display}</option>)}
                    </select>
                </div>
                <div>
                    <label>Mapping Fruits: </label>
                    {this.fruits.map((f)=>(
                        <React.Fragment>
                            <input type='checkbox'
                                key={f.value}
                                name="fruits"
                                value={f.value}
                                checked={this.state.fruits.includes(f.value)}
                                onChange={this.updateCheckBox}/>{f.display}
                        </React.Fragment>
                    ))}

                </div>

                <button onClick={this.showFormValue}>Submit</button>
            </React.Fragment >
        )
    }


}

export default SurveyForm