import React, { Component } from "react";

class FormFieldC extends Component {
  /* 
Creating methods for a class
*/

  render() {
    const { labelName, typeName, placeholderText } = this.props;

    return (
      <div className="field">
        <label className="label">{labelName}</label>
        <div className="control">
          <input
            className="input"
            type={typeName}
            placeholder={placeholderText}
          />
        </div>
      </div>
    );
  }
}

export default FormFieldC;
