import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';


class Navbar extends React.Component{
  render() {
    return(
      <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
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
            <a class="bd-tw-button button login" href="#">
              <span>
                Login
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary signup" href="#">
              <span>Signup</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
  }
}

class CoolButton extends React.Component {
  render(){
    let className = "button"
    if(this.props.isSmall) {
      className += " is-small "
    }
    if (this.props.isDanger) {
      className += " is-danger "
    }
    if (this.props.isSuccess) {
      className += " is-success "
    }
    if(this.props.className) {
      className += this.props.className
    }
    return(
      <button className={className}>{this.props.children}</button>
    )
  }
}

class FormField extends React.Component {
  render(){
    return(
      <div class="field">
  <label class="label">{this.props.label}</label>
  <div class="control">
    <input class="input" type={this.props.type} placeholder={this.props.placeholder} />
  </div>
  </div>

    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>
    )
  }
}

class Signup extends React.Component {
  render() {
    return(
      <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="Password" />
      <CoolButton isSmall isSuccess className="is-rounded">Submit</CoolButton>
      </div>
    )
  }
}

ReactDOM.render(
  <Signup />,
  document.getElementById('root')
);
