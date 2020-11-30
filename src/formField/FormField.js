import 'bulma/css/bulma.css';
import React, { Component } from 'react'

class FormField extends Component {
    render() {
        return (
            <div className='field'>
                <div className="control">
                    <label className='label'>{this.props.label}</label>
                </div>
                <input className="input" type={this.props.type} placeholder={this.props.placeholder} /> 
            
          </div>
        )
    }
}


export default FormField;
