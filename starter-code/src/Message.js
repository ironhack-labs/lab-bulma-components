import React from "react";

export default class Message extends React.Component {
  render() {
    
    let classNames = ["message"];
    if ("isInfo" in this.props) {classNames.push("is-info")};
    if ("isSuccess" in this.props) {classNames.push("is-success")};
    if ("isWarning" in this.props) {classNames.push("is-warning")};
    if ("isDanger" in this.props) {classNames.push("is-danger")};
    if ("isDark" in this.props) {classNames.push("is-dark")};
    if ("isPrimary" in this.props) {classNames.push("is-primary")};
    // on concatène les éléments du tableau sous forme de string et on ajoute un espace entre les éléments
    const classNamesString = classNames.join(" ");


    return (
      <div>
        <article className={classNamesString}>
          <div className="message-header">
            <p>{this.props.title}</p>
            <button class="delete" aria-label="delete" />
          </div>
          <div className="message-body">{this.props.children}</div>
        </article>
      </div>
    );
  }
}
