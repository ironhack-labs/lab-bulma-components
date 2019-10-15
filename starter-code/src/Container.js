import React, { Component, Fragment } from 'react';

class Container extends Component {
  render() {
    return (
      <div className = "container is-fluid .is-widescreen .is-fullhd">{this.props.children}</div>
    )
  }
}

export default Container;