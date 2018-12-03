import React from "react";
import "./FormField.css";

class FormField extends React.Component {

    constructor(props) {
        super(props)
    }



    render() {
        console.log(this.props)

        return (
            <div id="FormField" className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    <input className="input" type={this.props.type} placeholder={this.props.placeholder}></input>
                </div>
            </div>            
      )

    }
}

export default FormField;

