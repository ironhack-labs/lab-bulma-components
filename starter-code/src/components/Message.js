import React, { Component } from 'react';
import constants from '../../constants';

export default class Message extends Component {
  constructor(props){
    super(props);
    this.modifier = Object.keys(this.props).map(prop => constants.availableStatus[prop])[0] || '';
  }  

  render(){
    return(
      <article className={"message " +  this.modifier}>
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete" />
        </div>
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
    );
  }
}