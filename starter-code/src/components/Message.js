import React, { Component } from 'react'
import checkStyles from "./ClassNames"


export default class Message extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <article className={checkStyles('message', this.props)}>
          <div className='message-header'>
            <p>{this.props.title}</p>
            <button className='delete' aria-label='delete'></button>
          </div>
          <div className='message-body'>
            <p>{this.props.children}</p>
          </div>
        </article>
      </div>
    )
  }
}
