import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="#" class="navbar-item" href="https://bulma.io"><img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="image" /></a>
                <a href="#" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span></a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div className="navbar-start"><a className="navbar-item">Home</a></div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href="#" className="button is-primary"><strong>Sign up</strong></a>
                            <button className="button is-small  is-centered">Log in</button>
                          
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}


export default Navbar
  
        