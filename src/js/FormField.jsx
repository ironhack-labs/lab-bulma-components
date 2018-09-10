import React from "react";
// import {label} from "./Application"

class FormField extends React.Component {
constructor(props) {
    super(props);
    this.state = {label: "   this.state..."};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}{this.state.label}</label>
        <div className="control">
            <input type={this.props.type} value={this.value} placeholder={this.props.placeholder}/>
            </div>
      </div>
    );
  }
}

export default FormField;
