import React from 'react';
import CoolButton from '../CoolButton/CoolButton'

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">Home</a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <CoolButton isPrimary><strong>Sign Up</strong></CoolButton>
                                <CoolButton isLight>Log in</CoolButton>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;