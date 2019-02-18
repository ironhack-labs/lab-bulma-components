import React, {Component} from 'react';
import './App.css';

class CoolButton extends Component {
  render () {
    return (
      
        <button className={getClasses(this.props)}>{this.props.children}</button>
      
    )
    function getClasses (props) {
      let className = "button "
      if (props.className) {
        className += props.className
      }
      if (props.isSmall) {
        className += " is-small "
      }
      if (props.isDanger) {
        className += "is-danger "
      }
      if (props.isSuccess) {
        className += "is-success "
      }
      return className
    }
  }
}

export default CoolButton;
