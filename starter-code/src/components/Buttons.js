import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className="buton">
        <article className="message is-info">
          <div className="message-header">
            <p>Web Under Maintenance</p>
            <button className="delete" aria-label="delete" />
          </div>
          <div className="message-body">
            The submit button is under maintenance, please wait a moment for the 
            developer to fix it.
          </div>
        </article>
      </div>
    );
  }
}
