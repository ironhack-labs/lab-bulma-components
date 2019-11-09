/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from 'react';
import CoolButton from './CoolButton';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.validateSignup) {
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
          <div className="field form-field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="*********" />
            </div>
          </div>
          <button type="submit" className="button is-success">Signup</button>
          <button type="button" className="button">Cancel</button>
        </Fragment>
      );
    } else {
      return <CoolButton />;
    }
  }
}

export default Signup;
