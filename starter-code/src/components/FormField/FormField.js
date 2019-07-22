import React, {Component} from 'react';
import './FormField.css';

class FormField extends Component {
  render(props) {
    return (
      <div className="FormField">
        <div class="field">
          <label class="label">{this.props.label}</label>
          <div class="control">
            <input class="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;