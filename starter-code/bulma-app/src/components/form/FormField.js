import React, {Component} from 'react';
import 'bulma/css/bulma.css';


class FormField extends Component {

  constructor(props){
    super(props);
  }

  render(){
  return (
    <div class="field">
  <label class="label">{this.props.label}</label>
  <div class="control">
    <input class="input" type={this.props.type} placeholder={this.props.placeholder}/>
  </div>
</div>
  );
  };
}




export default FormField;