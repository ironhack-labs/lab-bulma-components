/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-else-return */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import Signup from './Signup';
import Message from './Message';

class CoolButton extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Fragment>
        <Navbar login="button is-info is-active" signup="button is-primary is-active" />        <Message title="Welcome to Bulma!" />
        {this.props.check ? <Signup validateSignup={this.props.check} /> : (
          <div>
            <div>
              <div className="App-Main-Text">Create Cool Buttons!</div>
              <FormField />
              <div className="buttons">
                <button type="submit" className={this.props.firstButton}>Cool Button!</button>
                <button type="submit" className={this.props.secondButton}>Another Cool Button!</button>
                <button type="submit" className={this.props.finalButton}>Final Cool Button!</button>
              </div>
            </div>
          </div>
        )}
      </Fragment>

    );
  }
}

export default CoolButton;
