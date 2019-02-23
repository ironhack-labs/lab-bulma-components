import React from "react";

class CoolButton extends React.Component {
  render() {

    let classes = ["button"];
      if("isSmall" in this.props){
        classes.push("is-small")
      }
      if("isDanger" in this.props){
        classes.push("is-danger")
      }
      if("isSuccess" in this.props){
        classes.push("is-success")
      }


    return <button className={classes.join(" ")}>{this.props.children}</button>;
  }
}

export default CoolButton;
