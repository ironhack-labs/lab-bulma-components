import React, { Component } from "react";
import CoolButton from  "./CoolButton";


export default class FormField extends Component {
  render() {
    return (
      <section className="formfield-container">
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
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
            />
              <CoolButton mike="is-rounded my-class is-danger is-small">
                Submit
              </CoolButton>
          </div>
        </div>
      </section>
    );
  }
}
