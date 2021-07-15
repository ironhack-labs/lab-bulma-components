import { Component } from "react";

class FormField extends Component {
    render () {
    <div className="field">
            <label className="label" label={props.label}>{props.label}</label>
        <div className="fieldcrlt">
            <input className="in" type={props.type} placeholder={props.placeholder} />
        </div>
    </div>
    }
}

export default FormField;