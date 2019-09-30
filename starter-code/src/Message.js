import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div>
                <article class="message is-small">
  <div class="message-header">
    <p>Hello World</p>
    <button class="delete is-small" aria-label="delete"></button>
  </div>
  <div class="message-body">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
  </div>
</article>
            </div>
        )
    }
}
