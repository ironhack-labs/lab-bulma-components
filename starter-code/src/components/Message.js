import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "../styles.js";

let cx = classNames.bind(styles);

export default class Message extends Component {
  constructor() {
    super();
    this.state = { delete: true };
  }

  onClick = () => {
    this.setState({
      delete: false
    });
  };

  render() {
    let className = cx("message", this.props);

    return (
      <div className="container">
        {this.state.delete ? <article className={className}>
          <div className="message-header">
            <p>{this.props.title}</p>
            <button
              className="delete"
              onClick={this.onClick}
              aria-label="delete"
            />
          </div>
          <div className="message-body">{this.props.children}</div>
        </article> : null}
      </div>
    );
  }
}
