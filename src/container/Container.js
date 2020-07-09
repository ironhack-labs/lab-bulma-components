import React, { Component } from 'react'
import Message from '../message/Message'

class Container extends Component {
    render() {
        return (
            <Message isInfo title='Hello World'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
          </Message>
        )
    }
}

export default Container