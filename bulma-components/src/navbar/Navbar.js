import './Navbar.css'
import 'bulma/css/bulma.css';
import CoolButton from '../coolButton/CoolButton';

const Navbar = ({ input1, input2, input3 }) => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        {input1}
                    </a>

                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <CoolButton className="button is-rounded my-class is-success is-small is-centered" btn1={input2} > </CoolButton>

                        </p>
                        <p className="control">
                            <CoolButton className="button is-rounded my-class is-success is-small is-centered" btn1={input3} > </CoolButton>

                        </p>
                    </div>
                </div>
            </div>

        </nav >
    )
}

export default Navbar