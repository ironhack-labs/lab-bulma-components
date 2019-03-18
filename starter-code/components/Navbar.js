import React from "react"

function Navbar () {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
            </div>
            <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                    Home
                </a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="button is-info" target="_blank" href="#">
                            <span>
                                Login
                            </span>
                            </a>
                        </p>
                        <p className="control">
                            <a className="button is-primary" href="#">
                            <span>Signup</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
