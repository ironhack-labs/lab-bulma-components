import React, { Component } from "react";
import "../public/stylesheets/coolbutton.css";

export default class CoolButton extends Component {
  constructor(props) {
    super(props);
  }


  //******* Draw Two First Buttons, as in exercise *******//

  // render() {
  //   let strClass = "button is-small";
  //   strClass += this.props.isDanger ? " is-rounded my-class is-danger" : "";
  //   strClass += this.props.isSuccess ? " is-success" : "";

  //   return <button className={strClass}> {this.props.children} </button>;

  // }


  
  //******* Draw all possible button styles ********//

  render() {
    console.log(this.props);
    return (
      <div>
        <button className={"button " + this.props.button}>{this.props.children}</button>
      </div>
    );
  }
}
