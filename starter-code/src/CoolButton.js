import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    console.log(this.props);

    const { className, children} = this.props;

    return (
      <div>
        <a className= {className}>
          { children }
        </a>
      </div>
    );
  }
}

export default CoolButton;


