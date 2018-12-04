import React from "react";

export default class CoolButton extends React.Component{
  render(){
      return (
          <div className="cool-button">
           <button className={this.props.class}>{this.props.name}</button>
          </div>  
      )
  }
  
}