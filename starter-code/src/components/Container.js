import React, { Component } from 'react'
import Message from './Message.js'

export default class Container extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Message isInfo title="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.</Message>
      </div>
    )
  }
}
