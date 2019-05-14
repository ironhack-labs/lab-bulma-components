import React, { Component } from 'react';
import { Button } from 'react-bulma-components/full';

export default class CoolButton extends Component {
  render() {
    return (
      <div>
        <Button className={this.props.className}>{this.props.name}</Button>
      </div>
    );
  }
}
