import React, { Component } from 'react';
import './FormField.css'
import 'bulma/css/bulma.css'

class FormField extends Component {
    render() {
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    <input className="input" type="text" placeholder={this.props.placeholder} />
                </div>
            </div>
    
        )
    }
}


export default FormField;