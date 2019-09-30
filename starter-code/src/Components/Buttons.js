import React, { Component } from 'react'
import CoolButton from './CoolButton';

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <CoolButton className="button is-rounded my-class is-danger is-small">Button 1</CoolButton>
        <CoolButton className="button is-small is-success"> Button 2</CoolButton>
        
      </div>
    )
  }
}
