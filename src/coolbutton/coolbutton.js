import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './coolbutton.css'

class CoolButton extends Component {
  render() {
    const classes = {
      isDanger: 'is-danger',
      isPrimary: 'is-primary',
      isSuccess: 'is-success',
    }

    return this.props.isButton ? (
      <button className="button">
        {this.props.children}
      </button>
    ) : (
      <a href={this.props.link} className="button">
        {this.props.children}
      </a>
    )
  }
}

export default CoolButton
