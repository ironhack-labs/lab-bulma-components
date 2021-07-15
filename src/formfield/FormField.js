import React, {Component} from 'react';
import 'bulma/css/bulma.css';

class FormField extends Component {
    render() {
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <input
                className="input"
                type={this.props.type}
                placeholder={this.props.placeholder}
                />
            </div>
        )
    }
}

export default FormField;