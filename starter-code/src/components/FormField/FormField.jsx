import React from 'react';

class FormFields extends React.Component {
    render() {
        return (
            <div className="fields">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
                </div>
            </div>
        )
    }
}

export default FormFields;