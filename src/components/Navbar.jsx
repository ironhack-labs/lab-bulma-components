import React from 'react';
import CoolButton from './CoolButton';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png"
                            alt="Bulma: a modern CSS framework based on Flexbox"
                            width="112" 
                            height="28" 
                        />
                    </a>
                        <div className="navbar-burger burger" 
                            data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                </div>

                <div id="navbarExampleTransparentExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" 
                            href="https://bulma.io/">
                            Home
                        </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" 
                            href="https://bulma.io/documentation/overview/start/">
                            Docs
                        </a>
                    <div className="navbar-dropdown is-boxed">
                        <a className="navbar-item" 
                            href="https://bulma.io/documentation/overview/start/">
                            Overview
                        </a>
                        <a class="navbar-item" 
                            href="https://bulma.io/documentation/overview/modifiers/">
                            Modifiers
                        </a>
                        <a className="navbar-item" 
                            href="https://bulma.io/documentation/columns/basics/">
                            Columns
                        </a>
                        <a class="navbar-item" 
                            href="https://bulma.io/documentation/layout/container/">
                            Layout
                        </a>
                        <a class="navbar-item" 
                            href="https://bulma.io/documentation/form/general/">
                            Form
                        </a>
                            <hr class="navbar-divider" />
                        <a class="navbar-item" 
                            href="https://bulma.io/documentation/elements/box/">
                            Elements
                        </a>
                        <a class="navbar-item is-active" 
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
                            <CoolButton isSmall isDanger className = 'is-rounded my-class'>
                                Sign up
                            </CoolButton>
                        </p>

                        <p className = "control">
                            <CoolButton isSmall isSuccess>
                                Login
                            </CoolButton>
                        </p>
                    </div>
                    </div>
                    </div>
                    </div>
            </nav>
        )
    }
    
}


export default Navbar;