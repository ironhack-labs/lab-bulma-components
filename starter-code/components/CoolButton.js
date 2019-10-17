import React from "react";

class CoolButton extends React.Component {

  render() {

    let btnClass;

    switch (this.props.className) {
      case "is-primary": btnClass = "button is-primary";
        break;
      case "is-info": btnClass = "button is-info";
        break;
      case "is-success": btnClass = "button is-success";
        break;
      default: btnClass = "button"
    }

    return (
      <button className={btnClass}>{this.props.children}</button>
    )
  }
}


export default CoolButton;