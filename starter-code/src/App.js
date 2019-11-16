import React, { Component } from "react";
//import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          isSmall
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              ></img>
            </a>
            <a className="button">Home</a>
            <CoolButton
              isSmall
              isDanger
              className="is-rounded my-class"
              text="Login"
            ></CoolButton>
            <CoolButton isSmall isSuccess text="Signup"></CoolButton>
          </div>
        </nav>
      </div>
    );
  }
}

class FormField extends Component {
  render() {
    let { label, type, placeholder } = this.props;

    console.log(this.props.isSmall);
    return (
      <div className="FormField">
        <div className="field">
          <label className="label">{label}</label>
          <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

class CoolButton extends Component {
  render() {
    let keys = Object.keys(this.props);
    console.log(keys);
    let { text } = this.props;
    let classN =
      "button " +
      keys
        .map(e => {
          if (options[e.toString()]) return options[e.toString()];
          return e;
        })
        .toString()
        .split(",")
        .join(" ");
    return <div className={classN}>{text}</div>;
  }
}

const options = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white"
};
export default App;
