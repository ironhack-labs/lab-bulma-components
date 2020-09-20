import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "../CoolButton/CoolButton.js";

const Navbar = () => {
  return (
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
                  className="bd-tw-button button is-info"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="https://bulma.io"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
                >
                  <span className="icon">
                    <i className="fab fa-twitter"></i>
                  </span>
                  {/* button is-rounded my-class is-danger is-small */}
                  <CoolButton isInfo className="my-class" btnText="Login" />
                </a>
              </p>
              <p className="control">
                <a
                  className="button is-primary"
                  href="https://github.com/jgthms/bulma/releases/download/0.9.0/bulma-0.9.0.zip"
                >
                  <span className="icon">
                    <i className="fas fa-download" />{" "}
                  </span>
                  {/* button is-small is-success */}
                  {/* <CoolButton btnClass="button " btnText="Sign Up" /> */}
                  <CoolButton isPrimary className="my-class" btnText="Login" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/*
{

  <nav className="navbar is-fixed-top">
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
        </div>

        <div className="navbar-end">{"Hey"}</div>
      </div>
      <button> Login </button>
      <button> SignUp </button>
    </nav>
</div>
}
*/
