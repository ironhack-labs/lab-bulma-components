import React from "react";

export default class CoolButtonRed extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className={"button is-rounded my-class is-danger is-small"}>
        {this.props.name}
        </button>
      </div>
    );
  }
}
