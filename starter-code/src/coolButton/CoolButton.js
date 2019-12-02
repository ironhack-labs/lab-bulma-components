import React from "react";
import * as utils from  '../../public/findBulmaClass.js'

export default class CoolButton extends React.Component {
  render() {

    let classNames = utils.findClass(this.props)
    classNames += " button";

    return (
      <button className={classNames}>{this.props.children}</button>
    );
  }
}
