import React, { Component } from "react";
import CoolButton from "./Coolbutton.js";

class Formfield extends Component {
  render() {
    let obj = {
        name: "Submit",
    }
    return (
      <div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
            />
          </div>
          <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="your password" />
          </div>
        </div>
        <CoolButton isDanger className='is-rounded my-class' name={obj.name} />
        </div>
      </div>
    );
  }
}

export default Formfield;
