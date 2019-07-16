import React from "react";

class CoolButton extends React.Component  {
  render() {

    let classes = "button " + this.props.className;

    if (this.props.isSmall){
      classes += " is-small" || "";
    }

    if (this.props.isDanger){
      classes += " is-danger";
    }

    if (this.props.isSuccess){
      classes += " is-success";
    }
    return (
      <button className={classes}>{this.props.children}</button>
  )
}
}

export default CoolButton;