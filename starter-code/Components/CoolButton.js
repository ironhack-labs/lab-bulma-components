import React, { Component } from "react";
import "./form.css";

export default class CoolButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "is-success",
      size: "is-small"
    };
  }
  _pulsado = () => {
    this.setState({
      color: "is-danger",
      size: "is-medium"
    });
  };

  render() {
    return (
      <div className="formButtons">
        <button
          onClick={this._pulsado}
          className="button += {this.state.color} += {this.state.size}"
        >
          Login
        </button>
        <a href="/signup"><button
            onClick={this._pulsado}
            className="button += {this.state.color} += {this.state.size}"
          >
            SignUp
          </button>
        </a>
      </div>
    );
  }
}
