import React , { Component} from 'react';

export default class CoolButton extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (  
      <button className={"ml-2 " + this.props.className}>{this.props.children}</button>
    )
  }
}


