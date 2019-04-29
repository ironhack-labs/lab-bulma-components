import React, { Component } from 'react'

 class CoolButton extends Component {
  render() {
    let classes= this.props.className; 

      if (this.props.isSmall != undefined) classes += " is-small"; //si existe concatena
      if (this.props.isDanger != undefined) classes += " is-danger";
      if (this.props.isSuccess != undefined) classes += " is-success";
      classes += "  button";





    return (
      <div>
          <button className={classes}> {this.props.children} </button>
         
      </div>
    )
  }
}


export default  CoolButton;