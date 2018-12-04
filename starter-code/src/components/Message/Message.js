import React, { Component } from "react";
import { throws } from "assert";

import NavBar from "./../NavBar/NavBar";
import FormField from "./../FormField/FormField";
import CoolButton from "./../CoolButton/CoolButton";

class Messaje extends Component {

  classes = {
    isDark: 'is-dark',
    isPrimary: 'is-primary',
    isLink: 'is-link',
    isInfo: 'is-info',
    isSuccess: 'is-success',
    isWarning: 'is-warning',
    isDanger: 'is-danger'
  };

  render() {
    let classNames = 'message ';

    Object.keys(this.props).forEach(elem => {
      let index = Object.keys(this.classes).indexOf(elem);
      if (index >= 0) {
        classNames += ' ' + Object.values(this.classes)[index];
      }
    });

    return (
      <div className="Messaje">
        <article className={classNames}>
          <div className="message-header">
            <p>{this.props.title}</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">{this.props.children}</div>
        </article>
      </div>
    );
  }
}

export default Messaje;