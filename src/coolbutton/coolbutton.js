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
    return <a href={this.props.link} class="button">{this.props.children}</a>
  }
}

export default CoolButton
