import React from "react";

const Navbar = () => {
    return (
        <div className="navbar-menu">
                        <div className="navbar-start">
                          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma"/>
                          <a class="navbar-item">Home</a>
                        </div>
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                <a className="button">
                                    <span className="icon">
                                    <i className="fas fa-twitter" aria-hidden="true"></i>
                                    </span>
                                    <span>Tweet</span>
                                </a>
                                </p>
                                <p className="control">
                                <a className="button is-primary">
                                    <span className="icon">
                                    <i className="fas fa-download" aria-hidden="true"></i>
                                    </span>
                                    <span>Download</span>
                                </a>
                                </p>
                            </div>
                            </div>
                    </div>
    );
}

export default Navbar;