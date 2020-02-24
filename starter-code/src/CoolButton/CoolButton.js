import React from "react";

export default class CoolButton extends React.Component {
  render() {
      return (
      <button className={this.props.className} >{this.props.children}</button>
    );
  }
}
