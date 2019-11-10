import React, { Component } from 'react';

class FormField extends Component {
    render() {
        return(
            <div className='FormField'>
                <h2>{this.props.label}</h2>
                <input class="input" type={this.props.type} placeholder={this.props.placeholder}></input>
            </div>            
        )
    }
}

export default FormField;