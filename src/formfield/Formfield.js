import React, {Component} from 'react';
import 'bulma/css/bulma.css';

class FormField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
      type: props.type,
      placeholder: props.placeholder
    };
  }
  
  render() {
      return (
        <div className='field'>
          <label className='label'>{this.state.label}</label>
          <input className="input" type={this.state.type} placeholder={this.state.placeholder} />
        </div>
      );
    };
  }

export default FormField;