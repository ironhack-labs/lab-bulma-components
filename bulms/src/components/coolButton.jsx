import React from "react";

export default class CoolButton extends React.Component {
  render() {
    //if you have many conditions use Object instead

    let classList = "";
    if (this.props.isDanger) {
      classList += " is-danger";
    } else if (this.props.isSuccess) {
      classList += " is-success";
    }

    return (
      <div>
        <a className={"button " + classList}>Button</a>
      </div>
    );
  }
}
//problem commiting
