import React, { Component } from "react";
import "bulma/css/bulma.css";

export default class Message extends Component {
  render() {
    return (
      <div>
        <article class="message is-primary">
          <div class="message-header">
            <p>Saved</p>
            <button class="delete"></button>
          </div>
          <div class="message-body">
            <p> Signup success </p>
          </div>
        </article>
      </div>
    );
  }
}
