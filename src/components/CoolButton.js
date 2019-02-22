import React, { Component } from 'react';
import constants from '../constants';

export default class CoolButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modifiers: Object.keys(props)  //what is this? 
        .map(prop => constants.availableStatus[prop] || '') 
        .join(' ')
    }
  }

  render() {
    return (
      <button className={"button " + this.props.className + this.state.modifiers }>{this.props.children}</button>
    )
  }
}