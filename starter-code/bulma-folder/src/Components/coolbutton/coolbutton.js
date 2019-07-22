import React, { Component } from "react";
import "./coolbutton.css";
// import Nav from './Components/nav/nav'

class CoolButton extends Component {
  constructor(props){
    super(props)
  this.classList = 'button ' + this.props.className;
    
  }
  checkClasses = () =>{

      if(this.props.isPrimary){
        this.classList += ' is-primary';
      }
      if(this.props.isSuccess){
        this.classList += ' is-success';
      }  
      if(this.props.isDanger){
        this.classList += ' is-danger';
      }
      if(this.props.isSmall){
        this.classList += ' is-small';
      }
  }
  render() {
    return (
      <div className="App">
       {this.checkClasses()}
      <button className={this.classList}>{this.props.children}</button>
      </div>
    );
  }
}

export default CoolButton;
