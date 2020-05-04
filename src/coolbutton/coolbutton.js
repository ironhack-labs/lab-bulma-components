import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './coolbutton.css'

class CoolButton extends Component {
  render() {
    console.log(this.props)
    const classes = {
      isDanger: 'is-danger',
      isPrimary: 'is-primary',
      isSuccess: 'is-success',
    }
    return <button class="button">{this.props.children}</button>
  }
}

export default CoolButton
