import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bulma/css/bulma.css';
const bulmaButtons = {
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
  isWhite: 'is-white'
};

function convertToCSS(key) {
  const entries = Object.entries(bulmaButtons);
  const classes = Object.keys(key);
  let keysList = '';
  for (let i = 0; i < entries.length; i++) {
    for (let j = 0; j < classes.length; j++) {
      if (entries[i][0] === classes[j]) {
        keysList += entries[i][1] + ' ';
        // keysList.concat(entries[i][1], ' ');
      }
    }
  }
  console.log('keyslist: ', keysList);
  return keysList;
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Button isSmall isDanger className="is-rounded my-class">
          Button 1
        </Button>
        <Button isSmall isSuccess>
          Button 2
        </Button>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="Secret Words" />
        <Button isSmall isDanger className="is-rounded my-class">
          Submit
        </Button>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>
          .
        </Message>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button
        className={
          convertToCSS(this.props) + ' button ' + (this.props.className ? this.props.className : '')
        }
      >
        {this.props.children}
      </button>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button is-info">
                    <span>LogIn</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary">
                    <span>Sign Up</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

class FormField extends React.Component {
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input class="input" type={this.props.type} placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <article className={this.props}>
        <div class="message-header">
          <p>{this.props.title}</p>
          <button class="delete" aria-label="delete" />
        </div>
        <div class="message-body">{this.props.children}</div>
      </article>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
