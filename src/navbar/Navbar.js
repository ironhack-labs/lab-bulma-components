import React, {Component} from 'react';
import "./Navbar.css";
import "bulma/css/bulma.css";

class NavBar extends Component {

    render(){
        
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
                <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-dropdown is-boxed">
                    <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                        Home
                    </a>
                    </div>
                </div>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                    <p className="control">
                        <a className="bd-tw-button button is-info" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                        <span>
                            Login
                        </span>
                        </a>
                    </p>
                    <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.8.2/bulma-0.8.2.zip">
                        <span>Signup</span>
                        </a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </nav>
        );
    }

}

export default NavBar;
