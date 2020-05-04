import React from 'react';
import './Header.css'
import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/CoolButton'

const Header = () => {
    return (
        <>
            <article className="version">
                <p>Bulma <strong> 0.8.2 </strong>is out!</p> &nbsp;
                <a href="/">Release notes</a> <p>&nbsp; - &nbsp;</p>
                <a href="/"><strong>Download it now</strong> </a>
            </article>

            
            <nav className="navbar is-center" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Documentation
                        </a>

                        <a className="navbar-item">
                            Videos
                        </a>

                        <a className="navbar-item">
                            Expo
                        </a>

                        <a className="navbar-item">
                            Love
                        </a>

                        <a className="navbar-item">
                            Backers
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                More
                                </a>

                                <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                                </div>
                        </div>
                    </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary">
                                        <strong>Sponsor</strong>
                                    </a>
                                    <CoolButton className="button is-danger" text="Signup"
                                    />
                                
                                    <a className="button is-light">
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </nav>
        </>
    )
}

export default Header