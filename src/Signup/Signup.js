import React from 'react'
import 'bulma/css/bulma.css'

class Signup extends React.Component{
    render() {
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
                </div>
                <div className="password">
                    <input className="input" type={this.props.password} placeholder={this.props.placeholder} />
                </div>
            </div>
        )
    }
}