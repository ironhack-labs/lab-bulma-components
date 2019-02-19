import React, {Component} from "react";

class Form extends Component{

  render(){
    return (
      <div class="field">
  <label class="label">{this.props.label}</label>
  <div class="control">
    <input class="input" type="text" placeholder={this.props.placeholder}/>
  </div>
</div>

    )
  
    
  }



}

export default Form