import React from "react";
class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Form">
                <div className="field">
                    <label className="label">{this.props.label}</label>
                    <div className="control">
                        <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Form