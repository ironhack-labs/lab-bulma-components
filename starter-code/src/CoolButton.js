import React, { Component } from "react";

class CoolButton extends Component{
  render(){

    const {isDanger, isSuccess, isSmall, className, name} = this.props;

    let cssClasses = "button " + className ;
    
    if (isSmall){
      cssClasses += " is-small";
      if (isDanger){
        cssClasses += " is-danger";
      }
      if (isSuccess){
        cssClasses += " is-success";
      }
    }

    return(
        <button className={cssClasses}>{name}</button>
    )
  }
}

// export your component CLASS so that you can display it from other files
export default CoolButton;