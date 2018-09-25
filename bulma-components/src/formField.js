import React, {Component} from 'react';

class FormField extends Component {
  render() {
    // log this.props
    const { type, labelName, placeholder } = this.props;
    return (
        <div className="field">
          <label className="label">{labelName}</label>
          <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
          </div>
        </div>
    );
  }
}

export default FormField;
