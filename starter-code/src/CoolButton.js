import React, { Component } from 'react'

export default class CoolButton extends Component {
  render() {
    return (
      <div>
        <button className="button is-primary is-rounded">
          {this.props.children}
        </button>
      </div>
    )
  }
}
