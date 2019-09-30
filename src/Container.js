import React, { Component } from 'react'
import Signup from "./Signup"
import Message from "./Message"

export default class Container extends Component {
  render() {
    return (
      <div className="thing">
        <Signup />
        <Message className="message is-info" title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    )
  }
}
