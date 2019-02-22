import React, { Component } from 'react';
import constants from '../../constants';

export default class Message extends Component {
  
  constructor(props) {
    super(props),
    this.classMessage = Object.keys(props).map(prop => constants.classesList[prop]).join(' ')   
  }

  render () {
    return (
      <div className="column is-6">
        <article className={"message " + this.classMessage}>
          <div className="message-header">
            <p>{this.props.title}</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">
            {this.props.children}
          </div>  
        </article>
      </div>
    )
  }
}