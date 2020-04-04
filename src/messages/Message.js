import React, { Component } from "react";
import 'bulma/css/bulma.css';

class Message extends Component {
  render(){
    const { title, isInfo } = this.props
    let extraClass
    if(isInfo) extraClass='is-info' // Fast. Improve.
    return (
      <article className={`message column is-one-third ${extraClass}`}>
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
    );
  }
};

export default Message
