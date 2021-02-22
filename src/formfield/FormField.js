import React from "react";


class FormField extends React.Component {
    render() {
        return (
 <div>
   <div className="field">
  <label className="label">{this.props.label}</label>
  <div className="control">
    <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
  </div>
</div>
 </div>
        )
    }
}

export default FormField;


















