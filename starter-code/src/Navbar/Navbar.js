import React, { Component } from "react";
import CoolButton from "../CoolButton/CoolButton"

class Navbar extends Component {
    render() {
        return(
            <div>
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
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
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                                Docs
                    </a>
                            <div className="navbar-dropdown is-boxed">
                                <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                                    Overview
                        </a>
                                <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                                    Modifiers
                        </a>
                                <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                    Columns
                        </a>
                                <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                                    Layout
                        </a>
                                <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                                    Form
                        </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                                    Elements
                        </a>
                                <a className="navbar-item is-active"
                                    href="https://bulma.io/documentation/components/breadcrumb/">
                                    Components
                        </a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    {/* <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet"
                                        data-social-target="https://bulma.io" target="_blank"
                                        href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                        <span className="icon">
                                            <i className="fab fa-twitter"></i>
                                        </span>
                                        <span>
                                            Tweet
                                </span>
                                    </a> */}
            
                        <CoolButton isSmall isDanger className="is-rounded my-class">LogIn</CoolButton>

                        
                                </p>
                                <p className="control">
                                    {/* <a className="button is-primary"
                                        href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip">
                                        <span className="icon">
                                            <i className="fas fa-download"></i>
                                        </span>
                                        <span>Download</span>
                                    </a> */}
                                    <CoolButton isSmall isSuccess>Sign Up</CoolButton>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        )
       
    }
}

export default Navbar;