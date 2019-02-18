import React, { Component } from "react";


export default class SignUp extends Component {
  render() {
    return (
      <div>
      
        <div className="navbar" />
        <div className="form-field">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g Alex Smith" />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              />
            </div>
          </div>
        </div>
        <button className="button is-small is-success">Send</button>
      </div>
    );
  }
}
