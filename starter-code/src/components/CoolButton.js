import React from "react";

class CoolButton extends React.Component {
  render() {
    // ce tableau contient la liste des classes bulma dont nous avons besoin
    let classNames = ["button"];
    if ("isSmall" in this.props) {classNames.push("is-small");}
    if ("isDanger" in this.props) {classNames.push("is-danger");}
    if ("isSuccess" in this.props) {classNames.push("is-success");    }
    // on concatène les éléments du tableau sous forme de string et on ajoute un espace entre les éléments
    const classNamesString = classNames.join(" ");

    return (
      <div>
        <button className={classNamesString}> {this.props.children} </button>
      </div>
    );
  }
}
export default CoolButton;
