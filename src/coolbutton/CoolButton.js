import React, { Component } from "react";
import "bulma/css/bulma.min.css";

class CoolButton extends Component {
  render() {
    return this.props.isSmall ? (
      this.props.isDanger ? (
        <button className="button is-rounded my-class is-danger is-small">{this.props.children}</button>
      ) : (
        <button className="button is-small is-success">{this.props.children}</button>
      )
    ) : (
      <button className="button is-success">{this.props.children}</button>
    );
  }
}

//<button className={this.props.className}>{this.props.children}</button>

export default CoolButton;