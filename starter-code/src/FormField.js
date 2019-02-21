import React from "react";

class FormField extends React.Component {
  render() {

    console.log('props=', this.props);
    const {label, type, placeholder} = this.props;

    return (
      <div className="FormField">

        <div className="field">
          <label className="label">{label}</label>
          <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
          </div>
        </div>

        
      </div>
    );
  }
}

export default FormField;
