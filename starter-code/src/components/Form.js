import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
        <div className="formfield">
        <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
        <div><button className="button is-link is-loading" >Go</button></div>
      </div>
      </div>
    );
  }
}
