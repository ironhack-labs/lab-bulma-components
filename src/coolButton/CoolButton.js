import React, {Component} from 'react';
import 'bulma/css/bulma.css';


class CoolButton extends Component {
  render() {
    return (
      <button className={`${this.props.className ? this.props.className : '' } ${this.props.isSmall ? 'is-small': ''} ${this.props.isSuccess ? 'is-success': ''} ${this.props.isDanger ? 'is-danger': ''}`} >{this.props.children}</button>
    );
  }
}
export  default CoolButton;