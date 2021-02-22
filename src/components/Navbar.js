import 'bulma/css/bulma.css';
import './Navbar.css';
import CoolButton from './CoolButton.js'

const Navbar = (props) => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="field is-grouped">
                        <p className="control">
                            <CoolButton classProperties="button is-small is-danger" text="Login"/>
                        </p>
                        <p className="control">
                            <CoolButton classProperties="button is-small is-rounded is-success" text="Signup"/>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar