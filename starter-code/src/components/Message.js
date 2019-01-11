import React, { Component } from "react";
import classNames from 'classnames/bind';
import styles from "../styles.js"

let cx = classNames.bind(styles)

export default class Message extends Component {
  render() {
    let className= cx(
      'message',
      this.props
    )

    console.log(className)
    
    return (
      <article className={className}>
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete" />
        </div>
        <div className="message-body">{this.props.children}</div>
      </article>
    );
  }
}
