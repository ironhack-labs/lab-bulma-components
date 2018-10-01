import React from "react";
import "bulma/css/bulma.css";

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
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
                  data-social-target="http://localhost:4000"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
                >
                  <span className="icon">
                    <i className="fab fa-twitter" />
                  </span>
                  <span>Login</span>
                </a>
              </p>
              <p className="control">
                <a
                  className="button is-primary"
                  href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip"
                >
                  <span className="icon">
                    <i className="fas fa-download" />
                  </span>
                  <span>Signup</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const FormField = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input className="input" type={props.type} placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export const App = () => (
  <div>
    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField
      label="Email"
      type="email"
      placeholder="e.g. alexsmith@gmail.com"
    />
  </div>
);
