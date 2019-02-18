import React, { Component } from "react";

class FormField extends Component {
  render() {

    console.log(this.props);

    // <User firstName="Pablo" />
    //
    // this.props= { firstName: "Pablo" }

    const { label, type, placeholder } = this.props;
    return (
      <div>
        <div className="field">
          <label className="label">{label}</label>
          <div className="control">
            <input label={label} type={type} placeholder={placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;
