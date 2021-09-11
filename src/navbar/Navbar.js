import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "../coolbutton/CoolButton";

class Navbar extends React.Component {
    render() {
        return (
            <>
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma logo" width="112" height="28"/>
    </a>
            <div class="navbar-burger" data-target="navbarExampleTransparentExample">
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
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <div className="buttons">
                                    <button className="button is-info">Login</button>
                                    <button className="button is-success">Signup</button>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                
            </nav>
            </>
        )
    }
}

export default Navbar