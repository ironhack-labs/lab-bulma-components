import React from "react";
var classNames = require( 'classnames' );
import 'bulma/css/bulma.css';

const Navbar = () => {
  return (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
      </a>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
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
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <CoolButton isSmall isDanger className="is-rounded my-class" text="Login"></CoolButton>
        </div>
      </div>
      <div className="navbar-item">
        <div className="field is-grouped">
         <CoolButton isSmall isSuccess text="Signup"></CoolButton>
        </div>
      </div>
    </div>
</nav>


  )
}

const FormField = ({label, type, placeholder}) => {
  return (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input className={label} type={type} placeholder={placeholder}/>
    </div>
  </div>
  )
};

const CoolButton = props => {
  const classes = classNames({
    'is-small': props.isSmall,
    'is-success': props.isSuccess,
    'is-danger': props.isDanger
  })
  const text = props.text

  return (
    <button className={classes}>{text}</button>
  )
};

const Signup = () => {
  return (
    <div>
      <Navbar/>
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="your password" />
      </form>
    </div>
  )
};





export const App = () => {
  return (
    <Signup/>
  )
};




