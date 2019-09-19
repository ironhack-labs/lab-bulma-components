import React from 'react';
import '../App.css';

class CoolButton extends React.Component{

  render(){
    return(

      
      <a button class={this.props.class} href={this.props.href}>{this.props.children}</a>
      



      )
  }

}


export default CoolButton;