import React, { Component } from 'react';

export default class CoolButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <button className="button is-rounded my-Name is-danger is-small"></button>
    );
  }
}