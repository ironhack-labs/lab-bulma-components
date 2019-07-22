import React, {Component} from 'react';
import 'bulma/css/bulma.css';


class CoolButton extends Component {

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props)
  return (
    <button className={`button 
    ${this.props.className}
    ${this.props.isSmall && 'is-small'}
    ${this.props.isDanger && 'is-danger'}
    ${this.props.isSuccess && 'is-success'}
    `}>{this.props.children}</button>
  );
  };
}


export default CoolButton;