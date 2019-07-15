import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <article class="message is-warning message-warning">
      <div class="message-header">
        <p>Warning</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body"> Ni intentes darle al botón porque no hace nada.
      </div>
    </article>
    );
  }
}
