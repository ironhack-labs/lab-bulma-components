import React from "react";
// A) import React, { Component } from "react";



class Message extends React.Component {
    constructor(props){
        super(props);
       
        if (this.props.isInfo)
          this.state={myclass:"is-info"};
      
      
      }

  render() {

    return (
      
        <article className="message {this.state.myclass}">
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
            {this.props.children}
        </div>
      </article>
      
    
    );
  }
}

export default Message;