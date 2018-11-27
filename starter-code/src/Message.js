import React, {Component} from "react";

class Message extends Component {

  render() {
    const { title, isInfo, isDanger, isPrimary, isSuccess, isLink, isDark, isWarning } = this.props;

    let cssClasses = "message";
    if (isInfo) {
      cssClasses += " is-info";
    } else if (isDanger) {
      cssClasses += " is-danger";
    } else if (isPrimary) {
      cssClasses += " is-primary";
    } else if (isSuccess) {
      cssClasses += " is-success";
    } else if (isDark) {
      cssClasses += " is-dark";
    } else if (isLink) {
      cssClasses += " is-link";
    } else if (isWarning) {
      cssClasses += " is-warning";
    }

    return (
      <article className={cssClasses}>
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
    )
  }
}

export default Message;