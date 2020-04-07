import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FormFiels extends Component {
    render() {
        return (
            <div className='field column'>
                <label className='label'>{this.props.label}</label>
                <div className="control">
                    <input className='input' placeholder={this.props.placeholder} type={this.props.type} />
                </div>
            </div>
        );
    }
}

export default FormFiels;