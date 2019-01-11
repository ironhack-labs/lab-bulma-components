import React, { Component } from "react";
import {getClassName} from "../Bulma_Classes";

export default class CoolButton extends Component {
  render() {
    return <a href="#" className={getClassName(this.props, "button ")}>{this.props.children}</a>;
    }
  }
