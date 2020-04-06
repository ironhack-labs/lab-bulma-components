import 'bulma/css/bulma.css';
import React, { Component} from 'react';

class CoolButton extends Component {
  render() {
    const { styleClass, typeOfButton, value } = this.props;
    return (
      <input class={styleClass} type={typeOfButton} value={value}></input>
    )
  }
}

export default CoolButton;