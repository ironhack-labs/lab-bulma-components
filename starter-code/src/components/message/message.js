import React, { Component } from "react";
 export default class Message extends Component {
  classes = {
    isDanger: "is-danger",
    isDark: "is-dark",
    isInfo: "is-info",
    isLink: "is-link",
    isPrimary: "is-primary",
    isSuccess: "is-success",
    isWarning: "is-warning"
  };
  render() {
    let classesResult = "message " + this.props.className;;
    Object.keys(this.props).forEach(element => {
      let index = Object.keys(this.classes).indexOf(element);
      if (index >= 0) {
        let value = Object.values(this.classes)[index];
        classesResult += ` ${value}`;
      }
      console.log(classesResult);
    });
    return (
      <div>
        <article className={classesResult}>
          <div className='message-header'>
            <p>{this.props.title}</p>
            <button className="delete" aria-label="delete" />
          </div>
          <div className="message-body">
            {this.props.children}
          </div>
        </article>
      </div>
    );
  }
}