import React, { Component } from 'react'

class Form extends Component {
    render() {
    return (
        <div className="field">
            <label className="label">{this.props.label}</label>
            <div className="control">
                <input className="input" type={this.props.text} placeholder={this.props.placeholder}></input>
            </div>
        </div>
    )
    }
}

export default Form;