import React, { Component } from "react";

class FormField extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <form>
                <div className="field">
                    <label className="label">{this.props.label}</label>
                    <div className="control">
                        <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
                    </div>
                </div>
            </form>

        )
    }
}

export default FormField;