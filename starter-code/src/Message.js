import React from "react";

let data = {
  isInfo: "is-info",
  isDark: "is-dark",
  isPrimary: "is-primary",
  isLink: "is-link",
  isSuccess: "is-success",
  isWarning: "is-warning",
  isDanger: "is-danger"
};

class Message extends React.Component {
  constructor(props) {
    super(props);
    let classString = "message ";
    Object.keys(props).forEach(prop => {
      if (data[prop]) classString += data[prop] + " ";
    });
    console.log(classString);
    this.classString = classString;
  }

  render() {
    return (
      <article className={this.classString}>
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete" />
        </div>
        <div className="message-body">{this.props.children}</div>
      </article>
    );
  }
}

export default Message;
