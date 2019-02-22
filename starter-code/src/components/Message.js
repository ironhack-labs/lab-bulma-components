import React, { Component } from 'react';

const classesMessage = {
  isInfo : 'is-info',
  isLink : 'is-link',
  isPrimary : 'is-primary'
}

export default class Message extends Component {
  

  constructor(props) {
    super(props),
    this.classMessage = classesMessage[Object.keys(props)[0]]
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