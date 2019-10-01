import React, { Component } from "react";
import styles from './../../helpers/styles'
import checkStyles from './../../helpers/checkStyles'

export default class Message extends Component {
  constructor(props) {
    super(props)
    this.messageStyles = styles
  }
  render() {
    let styles = this.props.className
      ? ["message"].concat(this.props.className.split(" "))
      : ["message"]

    styles = checkStyles(this.props, this.messageStyles, styles)

    return (
      <div className={styles}>
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{" "}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </div>
    );
  }
}
