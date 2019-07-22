import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-two-fifths">

      <article class={`message ${this.props.color}`} >
        <div class="message-header">
          <p>{this.props.title}</p>
          <button class="delete" aria-label="delete" />
        </div>
        <div class="message-body" >
         {this.props.children}
        </div>
      </article>
        </div>
      </div>
    );
  }
}

export default Message;
