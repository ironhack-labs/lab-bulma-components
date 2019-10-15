import React, { Component, Fragment } from 'react';

class ButtonGroup extends Component {
  render() {
    return (
      <div className ="field is-grouped">{this.props.children}</div>
    )
  }}

  export default ButtonGroup