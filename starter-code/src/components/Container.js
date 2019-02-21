import React, { Component } from 'react';

export default class Container extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='container columns is-centered'>{this.props.children}</div>
    );
  }
}