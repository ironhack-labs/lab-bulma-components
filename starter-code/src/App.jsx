import React, { Component } from "react";

const Nav = () => {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt=""
              width="112"
              height="28"
            />
          </a>
          <a class="navbar-item">Home</a>
        </div>
        <p class="control navbar-end navbar-item">
          <a class="button is-link" href="/signup">
            <span>Login</span>
          </a>
          <a class="button is-primary" href="/signup">
            <span>Signup</span>
          </a>
        </p>
      </nav>
    </div>
  );
};

const FormField = props => {
  return (
    <div>
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
    </div>
  );
};

const CoolButton = props => {
  return (
    <div>
      <button className={props.className}>BUtton 1</button>
    </div>
  );
};
export const App = () => {
  return (
    <div>
      <Nav />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton className="is-small is-danger is-rounded my-class">
       
      </CoolButton>
      <CoolButton className="is-small is-success">
     
      </CoolButton>
    </div>
  );
};
