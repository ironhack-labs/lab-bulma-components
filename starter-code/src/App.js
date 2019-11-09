/* eslint-disable no-else-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable keyword-spacing */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import CoolButton from './components/CoolButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <CoolButton firstButton="button is-primary is-light cool-button" secondButton="button is-success is-light cool-button" finalButton="button is-danger is-light cool-button" />
      </Fragment>
    );
  }
}

export default App;
