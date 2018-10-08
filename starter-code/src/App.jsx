import React, { Component } from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <div class="navbar-start">
            <a href="/home" class="navbar-item">Home</a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <a class="button is-link">Login</a>
              <a class="button is-primary">Singup</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

const FormField = (props) => {
  return (
    <div class="container">
      <div class="field">
      <p class="control has-icons-left has-icons-right">
      <label class="label">{props.label}</label>
      <input class="input" type={props.type} placeholder={props.placeholder} />
       
        <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
        <div class="control">
        </div>
      </div>
    </div>
  )
}



  const CoolButton = (props) => {
    return (
      <div>
      <button className={props.className}>{props.label}</button>
      </div>
    
      )
}

const Singup = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField  label="Password" class="input" type="password" placeholder="Password" />
      <CoolButton label="SingUp" className="button is-small is-success" />
    </div>
  )
}

export const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton label="Button1" className="button is-rounded my-class is-danger is-small"/>
      <CoolButton label="Button2" className="button is-small is-success"/>
      <Singup/>
    </div>
  )
}



