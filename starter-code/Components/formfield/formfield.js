import React, { Component } from "react";


class formfield extends Component {

  render() {
    return (
      <div className="formfield">
  <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type={this.props.type} placeholder={this.props.placeholder} />
  </div>
</div>
</div>
    )}
}

export default formfield;
