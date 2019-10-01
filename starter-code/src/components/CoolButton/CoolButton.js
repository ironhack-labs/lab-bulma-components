import React, { Component } from "react";
import styles from './../../helpers/styles'
import checkStyles from './../../helpers/checkStyles'

export default class CoolButton extends Component {
  constructor(props) {
    super(props);
    this.buttonStyles = styles
  }

  render() {
    let styles = this.props.className
      ? ["button"].concat(this.props.className.split(" "))
      : ["button"]

    // Object.keys(this.props).forEach((key, idx) => {
    //   if (key in this.buttonStyles && key) {
    //     styles.push(this.buttonStyles[key])
    //   }
    // })

    // styles = styles.join(" ")

    styles = checkStyles(this.props, this.buttonStyles, styles)
    
    return (
      <button className={styles}>
        {this.props.children}
      </button>
    );
  }
}
