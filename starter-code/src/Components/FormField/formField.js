import React, { Component } from "react";
import "./formField.css";

class FormField extends Component {
    constructor() {
        super()
    } 
    render() {
        return (
            <div>
                <div className="field">
                    <label className="label">{this.props.label}</label>
                    <div className="control">
                        <input className="input" type={this.props.type} placeholder={this.props.placeholder}></input>
                    </div>
                </div>
            </div>

        )
    }
}

export default FormField;