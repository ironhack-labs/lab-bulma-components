import React, {Component} from 'react';

class FormField extends Component {
  render() {
    // log this.props
    const { type, labelName, placeHolder } = this.props;
    return (
        <div class="field">
          <label class="label">{labelName}</label>
          <div class="control">
            <input class="input" type={type} placeHolder={placeHolder} />
          </div>
        </div>
    );
  }
}

export default FormField;
