import React, { Component } from 'react';

const bulmaMessageClasses = {
  isInfo : 'is-info',
  isLink : 'is-link',
  isPrimary : 'is-primary'
}

export default class Message extends Component {

  constructor(props){
    super(props),
    console.log(bulmaMessageClasses[Object.keys(props)[0]])

    this.classArticle = bulmaMessageClasses[Object.keys(props)[0]]
  }

  render() {
    return (
      <div className="column is-6 ">
        <article className={"message " + this.classArticle}>
          <div className="message-header">
            <p>{this.props.title || 'Should write prop title!'} </p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">
            {this.props.children}
          </div>
        </article>
      </div>
    );
  }
}