import React, {Component} from "react";

class ButtonField extends Component{

render(){
  
  return (
  
  <button className={this.props.className} >{this.props.value}</button>
  )
}

}


export default ButtonField