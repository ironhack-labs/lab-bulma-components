import React, { Component } from "react";


class Message extends Component {
  
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div show='true'>
        <article className="message is-info">
          <div className="message-header">
            <p>Info</p>
            <button
              onClick={this.props.closeMessage}
              className="delete"
              aria-label="delete"
            />
          </div>
          <div className="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </div>
        </article>
      </div>
    );
  }
}

export default Message;
