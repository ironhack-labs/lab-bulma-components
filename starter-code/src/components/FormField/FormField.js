import React, {Component} from "react";

export default class FormField extends Component {
  constructor(props) {
    super();    
  }

  render() {
    return (
      <div className="FormField">
        <label className="label">{this.props.label}</label>
        <div className="field">
          <div className="control">
            <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>
      </div>
    );
  }
}


