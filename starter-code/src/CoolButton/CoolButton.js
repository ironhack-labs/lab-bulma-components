import React from "react";

export default class CoolButton extends React.Component {
  render() {
    return (
        <button class="button is-rounded my-class is-danger is-small cool-buttons">{this.props.name}</button>
    );
  }
}