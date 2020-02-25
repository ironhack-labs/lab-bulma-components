import React, { Component } from "react";

//rfc in VSCODE
//props have to be passed, no state 
export default function FormField(props) {
    const {
        labelName, typeName, placeholderText 
    } = props;
    return (
        <div className="field">
          <label className="label">{labelName}</label>
          <div className="control">
            <input className="input" type={typeName} placeholder={placeholderText} />
          </div>
        </div>
    )
}

// alternative way -  it wit a class (props already included)
/*
export default class FormField extends Component {
    const = {labelName, typeName, placeholderText} = this.props
  render() 
    return (
      <div className="field">
          <label className="label">{labelName}</label>
          <div className="control">
            <input className="input" type={typeName} placeholder={placeholderText} />
          </div>
        </div>
    );
  }
}
*/