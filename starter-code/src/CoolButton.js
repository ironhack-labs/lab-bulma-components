import React, { Component } from 'react';
// import './App.css';
import 'bulma/css/bulma.css';


// eslint-disable-next-line react/prefer-stateless-function
class CoolButton extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="CoolButton">
        <button class="button is-rounded my-class is-danger is-small">Sign In</button>
        <button class="button is-small is-success">Sign Up</button>
      </div>
    );
  }
}

export default CoolButton;
