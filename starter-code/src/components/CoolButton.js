import React , { Component} from 'react';
import constants from '../../constants';

export default class CoolButton extends Component {

  constructor(props) {
    super(props),
    this.classes = Object.keys(props).map(prop => constants.classesList[prop]).join(' ');
  }

  render() {
    return (  
      <button className={"ml-2 button " + this.props.className + " " + this.classes}>{this.props.children}</button>
    )
  }
}


