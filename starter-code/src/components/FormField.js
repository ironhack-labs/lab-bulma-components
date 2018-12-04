import React from "react";

class FormField extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.props = props;
    // }
    render() {
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    <input className="input" type={this.props.type} placeholder={this.props.placeholder}></input>
                </div>
            </div>

        );
    }
}

export default FormField;