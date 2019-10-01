import React, {Component} from "react";

export default class FormField extends Component {
  constructor(props) {
    super();    
  }

  render() {
    return (
      <div className="FormField">
        <label class="label">{this.props.label}</label>
        <div class="field">
          <div class="control">
            <input class="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>
      </div>
    );
  }
}


