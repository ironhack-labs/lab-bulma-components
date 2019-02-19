import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    return (
      <div>
        <button className={"button " + this.props.className + " " + checkClass(this.props)}>
          {this.props.children}
        </button>
      </div>
    );

    function checkClass(props) {
    
    console.log(props.isSmall)
    console.log(props.isDanger)
    console.log(props.isSuccess)
      let className = "";
      if (props.isSmall) {
        className += "is-small ";
      }
      if (props.isDanger) {
        className += "is-danger ";
      }
      if (props.isSuccess) {
        className += "is-success ";
      }
      return className;
    }
  }
}

export default CoolButton;
