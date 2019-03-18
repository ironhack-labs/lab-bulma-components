
import React, { Component } from 'react'

class Message extends Component {
    cases = {
        isInfo: `is-info`,
        isLink: `is-link`,
        isSuccess: `is-success`
    }
    
    render() {

    let classes = "message"
    let i 
    Object.keys(this.props).forEach(prop => {
      i = Object.keys(this.cases).indexOf(prop)
      if (i >= 0) classes += " " + Object.values(this.cases)[i]
    })

    return (
        <article class={classes}>
            <div class="message-header">
            <p>{this.props.title}</p>
            <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
            {this.props.children}
            </div>
        </article>
    )
  }
}

export default Message
