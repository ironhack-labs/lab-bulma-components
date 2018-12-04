import React, { Component } from 'react';

class FormField extends Component{
    constructor(props) {
        super(props)
    }

    render(){

        return(
            <div>
                <label>{this.props.labelName}</label>
                <input type="text" placeholder={this.props.placeholder} />
            </div>
        )
    }

}

export default FormField;