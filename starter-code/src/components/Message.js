import React from "react";

class Message extends React.Component {
  render() {
    const { title } = this.props;

    let classNames = ["message"];
    if ("isInfo" in this.props) {classNames.push("is-info");}
    const classNamesString = classNames.join(" ");


    return (
      <div>
        <article className={classNamesString}>
          <div className="message-header">
            <p>{title}</p>
            <button class="delete" aria-label="delete" />
          </div>
          <div class="message-body"> {this.props.children} </div>
        </article>
      </div>
    );
  }
}

export default Message;
