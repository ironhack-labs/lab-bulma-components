import React from "react";
import * as utils from  '../../public/findBulmaClass.js'


export default class Message extends React.Component {
  render() {
    let classNames = utils.findClass(this.props)
    classNames += " message"
    
    return (
      <article className={classNames}>
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
