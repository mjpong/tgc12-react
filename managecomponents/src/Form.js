import React from "react";

export default function Form(props) {
    console.log(props)
    return (
        <React.Fragment>
            <div>
                <label> Username </label>
                <input
                    type="text"
                    value={props.username}
                    onChange={props.updateFormField}
                    name="username"
                />
            </div>
            <div>
                <label> Email </label>
                <input
                    type="text"
                    value={props.email}
                    onChange={props.updateFormField}
                    name="email" 
                />
            </div>
            <button onClick={props.confirm}> Update </button>
        </React.Fragment>

    )
}