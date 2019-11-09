/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="message is-info is-small message-custom">
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          <strong>Your best choice. Come and Find!</strong>
        </div>
      </article>
    );
  }
}

export default Message;
