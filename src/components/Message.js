import React, { Component } from 'react'

export default class Message extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <article className='message is-info'>
        <div className='message-header'>
          <p>Hello World</p>
          <button className='delete' aria-label='delete' />
        </div>
        <div className='message-body'>
          YOLO post-ironic <strong>pickled tofu</strong> asymmetrical letterpress McSweeney's gastropub wolf shabby chic butcher stumptown Tonx plaid polaroid keytar ethical flexitarian squid vegan kitsch ennui jean shorts Echo Park street art.
        </div>
      </article>

    )
  }
}
