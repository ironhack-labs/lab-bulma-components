import React from "react";
import "bulma/css/bulma.css";

class CoolButton extends React.Component {
  render() {
    this.props.className += " button";
    let classes = this.props.className.split(" ");
    
    if ("isSmall" in this.props){
      classes.push("is-small");
    }
    if ("isDanger" in this.props){
      classes.push("is-danger");
    }
    if ("isSuccess" in this.props){
      classes.push("is-success");
    }
    return (
      <React.Fragment>
        <button className={classes.join(" ")}>{this.props.children}</button>
      </React.Fragment>
    );
  }
}

export default CoolButton;
