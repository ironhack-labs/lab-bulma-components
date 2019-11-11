import React, { Component } from "react";
class CoolButton extends Component {
  render() {
    return (
        <>
        <a className={this.props.className}>{this.props.children}</a>
        {/* <a className="button is-rounded my-class is-danger is-small">Button1</a>
        <a className="button is-small is-success">Button2</a> */}
      </>
    );
  }
}
export default CoolButton;
