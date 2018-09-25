import React, { Component } from 'react';
import './App.css'
import 'bulma/css/bulma.css';


class CoolButton extends Component{
  render(){
    return(
      <div>
        <button class={this.props.class}> {this.props.buttonName}</button>

      </div>

    )
  }
}

export default CoolButton
