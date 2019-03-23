import React from "react";
import SignUp from "./Signup"
// JSX version
function Navbar() {
    return (
        
        // What is rendered in the Web
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <button className="button is-rounded my-class is-danger is-small">
                                    <span className="icon">
                                        <i className="fab fa-twitter" />
                                    </span>
                                    <span>Login</span>
                                </button>
                            </p>
                            <SignUp/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
  }



export default Navbar;