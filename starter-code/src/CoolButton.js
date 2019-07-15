import React, { Component } from "react";

export default class CoolButton extends Component {
  render() {
    return (
      <div>
        <button class="button " + {this.props.children}+ " is-danger is-small">
          Button 1
        </button>
        <button class="button is-small is-success">Button 2</button>
      </div>
    );
  }
}

// <button class="button is-rounded my-class is-danger is-small">Button 1</button>
// <button class="button is-small is-success">Button 2</button>

// <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
// <CoolButton isSmall isSuccess>Button 2</CoolButton>
