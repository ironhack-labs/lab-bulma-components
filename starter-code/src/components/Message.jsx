import React, { Component } from "react";
import {getClassName} from "../Bulma_Classes";

export default class Message extends Component {
  render() {
    return (
      <article className={getClassName(this.props, "message ")}>
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
    );
  }
}
