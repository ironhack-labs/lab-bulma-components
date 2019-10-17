import React, { Component } from "react";
import 'bulma/css/bulma.css';

class Message extends Component {


  render() {



    return (
      <div>

        <article class="message is-small">
          <div class="message-header">
            <p>Hello {this.props.userInfo.name}!</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>YOU SUCK! </strong>, tempus quis placerat ut, porta nec nulla. Nullam <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>

      </div>
    );
  }
}

export default Message;