import React from "react";

export default class CoolButtonGreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className="button is-small is-success">{this.props.name}</button>
      </div>
    );
  }
}
