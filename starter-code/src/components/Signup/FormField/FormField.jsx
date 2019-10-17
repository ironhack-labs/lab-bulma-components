import React from 'react';
import './FormField.css';

class FormField extends React.Component {
    render () {
    const { label, type, placeholder } = this.props
        return (
            <div className="formfield-container">
                <div className="field">
                <label className="label">{label}</label>
                    <div className="control">
                        <input className="input" type={type} placeholder={placeholder} />
                    </div>
                </div>
            </div>
        );
    }
};


export default FormField;