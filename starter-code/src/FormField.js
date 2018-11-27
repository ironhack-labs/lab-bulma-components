import React, { Component } from "react";

class FormField extends Component{
  render(){

    const { name } = this.props;
    let type;

    if (name === "Name"){
      let type = "text";
    }
    if (name === "Email"){
      let type = "email";
    }
    if (name === "Password"){
      let type = "password";
    }

    return(
        <div className="form">
          <div className="field">
            <label className="label">{name}</label>
            <div className="control">
              <input className="input" type={type} placeholder="write something" />
            </div>
          </div>
        </div>
    )
  }
}

// export your component CLASS so that you can display it from other files
export default FormField;