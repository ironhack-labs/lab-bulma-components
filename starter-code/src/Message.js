import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div class="form-container">
        <article className={this.props.type}>
          <div className="message-header">
            {this.props.title}
            <button className="delete" aria-label="delete" />
          </div>
          <div className="message-body">{this.props.content}</div>
        </article>
      </div>
    );
  }
}
