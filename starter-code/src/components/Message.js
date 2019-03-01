import React from 'react';
import constants from '../constants'

export default class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      class: Object.keys(props)
              .map(prop => constants.classes[prop] || [])
              .join(' ')
    }
  }

  render() {
    return (
      <article className={"message " + this.state.class}>
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
    )
  }
}

