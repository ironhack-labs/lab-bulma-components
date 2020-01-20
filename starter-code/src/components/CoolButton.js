import React, { Component } from "react";

class CoolButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let allClasses = 'button';
    if (this.props.isSmall) {
      allClasses += ' is-small';
    }
    if (this.props.isDanger) {
      allClasses += ' is-danger';
    }
    if (this.props.isSuccess) {
      allClasses += ' is-success';
    }
    if (this.props.isPrimary) {
      allClasses += ' is-primary';
    }
    if (this.props.className) {
      allClasses += ` ${this.props.className}`;
    }
    return (
      <button className={allClasses}>{this.props.children}</button>
    )
  }
}

export default CoolButton;
