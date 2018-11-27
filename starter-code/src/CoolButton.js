import React, { Component } from "react";

class CoolButton extends Component {

  render() {
    console.log(this.props);

    const { name, className } = this.props;

    return (
      <button className={className}>{name}</button>
    );
  }
}

export default CoolButton;