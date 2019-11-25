import React from "react";

const rules = {
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

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <CoolButton isSmall isDanger className="is-rounded my-class">
                Login
              </CoolButton>
              <CoolButton isSmall isSuccess>
                Signup
              </CoolButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const FormField = props => {
  console.log(props);
  return (
    <div>
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className="input"
          type={props.label}
          placeholder={props.placeholder}
        ></input>
      </div>
    </div>
  );
};

const CoolButton = props => {
  console.log(props);
  let str = " button ";
  for (let key in props) {
    if (props[key] === true) {
      str += `${rules[key]} `;
    }
  }
  return (
    <div>
      <button className={props.className + str}>{props.children}</button>
    </div>
  );
};

const Signup = () => {
  return (
    <div>
      <NavBar />
      <div>
        <FormField type="text" label="Name" placeholder="e.g Alex Smith" />
        <FormField
          type="email"
          label="Email"
          placeholder="e.g alex.smith@gmail.com"
        />
        <FormField
          type="password"
          label="Password"
          placeholder="password here"
        />
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
      </div>
    </div>
  );
};

const App = props => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default App;
