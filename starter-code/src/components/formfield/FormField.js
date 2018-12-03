import React from "react";
import "./formfield.css";

class FormField extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {


    return (
      <div id="formfield" className="FormField">
        <div class="field">
          <label class="label">{this.props.label}</label>
          <div class="control">
            <input class="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>      
      </div>
    );
  }
}

export default FormField;