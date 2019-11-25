import React from 'react';

const CoolButton = props => {
  const bulmaClasses = {
    isActive: 'is-active',
    isBlack: 'is-black',
    isCentered: 'is-centered',
    isDanger: 'is-danger',
    isDark: 'is-dark',
    isFocused: 'is-focused',
    isGrouped: 'is-grouped',
    isHovered: 'is-hovered',
    isInfo: 'is-info',
    isInverted: 'is-inverted',
    isLarge: 'is-large',
    isLight: 'is-light',
    isLink: 'is-link',
    isLoading: 'is-loading',
    isMedium: 'is-medium',
    isOutlined: 'is-outlined',
    isPrimary: 'is-primary',
    isRight: 'is-right',
    isRounded: 'is-rounded',
    isSelected: 'is-selected',
    isSmall: 'is-small',
    isStatic: 'is-static',
    isSuccess: 'is-success',
    isText: 'is-text',
    isWarning: 'is-warning',
    isWhite: 'is-white',
  };
  const classes = Object.keys(bulmaClasses);

  let attrs = classes.filter(bulmaClass =>
    Object.keys(props).includes(bulmaClass)
  );
  attrs = attrs.map(attr => bulmaClasses[attr]).join(' ');
  if (props.className) {
    attrs = `button ${attrs} ${props.className}`;
  } else {
    attrs = `button ${attrs}`;
  }
  console.log(attrs);
  return (
    <button method={props.method} type="submit" className={attrs}>
      {props.children}
    </button>
  );
};


const Navbar = props => (
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
        <a href="#" className="navbar-item">
          Home
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <CoolButton isFocused isSmall isInfo isRounded isLink method="GET">
              Sign up
            </CoolButton>
            <CoolButton isFocused isSmall isLight isRounded isLink method="GET">
              Login
            </CoolButton>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const FormField = props => (
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

const Signup = props => (
  <div>
    <Navbar />
    <form>
      <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField
        label="Password"
        type="password"
        placeholder="e.g. password123"
      />
      {/* <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton> */}
      <CoolButton isFocused isSmall isSuccess method="POST">
        Signup
      </CoolButton>
    </form>
    <Message messageHeader="Info" messageBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem." />
  </div>
);

const Message = props => (
  <article className="message">
    <div className="message-header">
      <p>{props.messageHeader}</p>
      <button className="delete" aria-label="delete"></button>
    </div>
    <div className="message-body normal">{props.messageBody}</div>
  </article>
);

const App = () => <Signup />;

export default App;
