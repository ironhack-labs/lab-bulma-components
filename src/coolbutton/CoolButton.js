import React from "react";
import "bulma/css/bulma.min.css";

const CoolButton = (props) => {

  let classList = "button";

  if (props.isSmall) {
    classList += " is-small"
  }

  if (props.isSuccess) {
    classList += " is-success"
  }

  if (props.isRounded) {
    classList += " is-rounded"
  }

  if (props.isDanger) {
    classList += " is-danger"
  }

  return (
    <button className={classList}>{props.children}</button>
  );
};

//<button className={this.props.className}>{this.props.children}</button>


export default CoolButton;