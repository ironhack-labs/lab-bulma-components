import React, { Component } from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <a class="navbar-item" href="https://bulma.io/">Home</a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <a class="is-link button">
                <span>
                  Login
              </span>
              </a>
              <a class="button is-primary">
                <span>Signup</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


const FormField = (props) => {
  return (
    <div>
      <div class="field">
        <label class="label">{props.label}</label>
        <div class="control">
          <input class="input" type={props.type} placeholder={props.placeholder}/>
        </div>
        </div>
      </div>
  )
}

        

    
    
export const App = () => {
  return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div>
  )
}