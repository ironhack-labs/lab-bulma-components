import React from 'react';
import './form-field.css';
class FormField extends React.Component {
    render() {
        return (
<div className="field">
  <label className="label">{this.props.field.label}</label>
  <div className="control">
    <input className="input" type={this.props.field.type} placeholder={this.props.field.placeholder} />
  </div>
</div>
        );
    }
}
export default FormField;