import 'bulma/css/bulma.css';
import React from 'react';

const Navbar = ({url, item, buttonSignup, buttonLogin}) => {
    return (
        <nav className="navbar is-light">
            <div className="navbar-brand ">
                <a className="navbar-item" href="#">
                    <img src={url}  alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/> 
                </a>
            </div>
            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="#">{item}</a>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="bd-tw-button button"  href="#">
                                <span>{buttonLogin}</span>
                            </a>
                        </p>
                        <p className="control">
                            <a className="button is-primary" href="#">
                                <span>{buttonSignup}</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;