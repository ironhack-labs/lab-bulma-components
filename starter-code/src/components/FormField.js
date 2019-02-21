import React, { Component } from 'react';
import './FormField.css';


export default class FormField extends Component {

  render() {
    return (
      <div className="columns section">
      <div className="column is-6 ">
        <div className="field">
          <label className="label">Name</label>
              <div className="control">
               <input className="input" type="text" placeholder="e.g Alex Smith"></input>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
               <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"></input>
            </div>
          </div>
      </div>
      </div>
   
    );
  }
}