import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className="buton">
        <article class="message is-info">
          <div class="message-header">
            <p>Web Under Maintenance</p>
            <button class="delete" aria-label="delete" />
          </div>
          <div class="message-body">
            The submit button is under maintenance, please wait a moment for the 
            developer to fix it.
          </div>
        </article>
      </div>
    );
  }
}
