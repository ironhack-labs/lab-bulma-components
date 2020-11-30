import React, { Component } from "react";
import "bulma/css/bulma.css";
export default class CoolButton extends Component {
  render() {
    console.log("COOL BUTTON THIS.PROPS.CHILDREN", this.props.children);

    const legend = {
      isDanger: "is-danger",
      isRounded: "is-rounded",
      isSmall: "is-small",
      isSuccess: "is-success",
    };

    let classes = "button";

    // Get all the prop names passed to the component
    let propNames = Object.keys(this.props);

    propNames.forEach((propName) => {
      if (legend[propName]) {
        classes += " " + legend[propName];
      }
    });
    return <button className={classes}>{this.props.children}</button>;
  }
}
