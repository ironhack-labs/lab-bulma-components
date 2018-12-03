import React, { Component } from 'react'

export default class Message extends Component {

  constructor(props) {

    super(props)

    this.props=props

       this.classNames = {
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isInfo: 'is-info',
        isLink: 'is-link',
        isPrimary: 'is-primary',
        isSuccess: 'is-success',
        isWarning: 'is-warning',
      }

    this.modifiedClass = 'message ' + Object.keys(this.props).map(prop => {
        return prop = this.classNames[prop]
    }).concat(this.props.className).join(' ')

  }

  render() {
    return (
      <article className={this.modifiedClass}>
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