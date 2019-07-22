import React, { Component } from 'react';
import '../../App.css';


class Main extends Component {
  constructor(props){
    super(props)
  }

  coolButton = () => {
    let str = this.props.className;
    // console.log(str);
    str += ' button';
    // console.log(str);
    if(this.props.isSmall){
     str += ' is-small';
    }
    if(this.props.isDanger){
      str += ' is-danger';
    }
    if(this.props.isSuccess){
      str += ' is-success'
    }
   return str; 
  }

  render(){

  


  return (


    <div> 
      <button className={this.coolButton()}>{this.props.children}</button>
    </div>
    
  );
  }
}

export default Main;