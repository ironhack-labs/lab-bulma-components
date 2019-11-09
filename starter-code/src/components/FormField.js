/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';


class FormField extends Component {
  render() {
    return (
      <Fragment>
        <div className="field form-field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
          </div>
        </div>
        <div className="field form-field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FormField;
