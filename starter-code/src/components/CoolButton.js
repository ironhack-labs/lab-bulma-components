import React, { Component } from 'react';

class CoolButton extends Component {
  render() {
    return(
    <button class={this.props.className}>{this.props.name}</button>
    )
  }
}

export default CoolButton;