import React, { Component } from 'react';

import './App.css';

class CoolButton extends Component {
  render() {
    return (
<button class="button is-rounded my-class is-danger is-small">{this.props.whoever}</button>

    );
  }
}

export default CoolButton;
