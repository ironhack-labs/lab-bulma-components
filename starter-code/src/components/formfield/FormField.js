import React from "react";
import "./formfield.css";

class FormField extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {


    return (
      <div id="formfield" className="FormField">
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>      
      </div>
    );
  }
}

export default FormField;