import React, { Component } from 'react'
import Message from '../Message/Message'
import './Container.css'

export default class Container extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div class='message'>
        <Message isInfo title="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.</Message>
      </div>
    )
  }
}
