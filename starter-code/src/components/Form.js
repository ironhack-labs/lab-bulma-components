import React, { Component } from "react";
import Submit from "./Submit";

export default class Form extends Component {
  render() {
    return (
      <div className="forming">
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
              type="password"
              placeholder="contraseña1234"
            />
          </div>
        </div>
        <Submit />
      </div>
    );
  }
}
