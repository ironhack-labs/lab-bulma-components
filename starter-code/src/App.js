import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="https://bulma.io"
                    target="_blank"
                    href="#"
                  >
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>Login</span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary" href="#">
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span>Signup</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const FormField = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className="input"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};
const btnClasses = {
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

const CoolButton = props => {
console.log(props)

let classes = "button "

Object.keys(btnClasses).forEach(el  => {
    if(props[el]) {
    classes += `${btnClasses[el]} `
    } 
})

  if (props.className) {
    classes += ` ${props.className}`;
  }

//   if (props.isSmall) {
//     classes += ` ${btnClasses.isSmall}`;
//   }
//   if (props.isDanger) {
//     classes += ` ${btnClasses.isDanger}`;
//   }
//   if (props.isSuccess) {
//     classes += ` ${btnClasses.isSuccess}`;
//   }

  return <button className={classes}>{props.children}</button>;
};

const App = () => {
  return (
    <div>
      <Nav />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class ">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
    </div>
  );
};

export default App;
