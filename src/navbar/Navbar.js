import React, { Fragment } from 'react'
import CoolButton from '../coolbutton/CoolButton'
import 'bulma/css/bulma.css';

export default function Navbar(props) {
    return (

        <Fragment>

            <h1>{props.placeholder} </h1>
            <div>
                <nav className="navbar is-transparent">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="/">
                                Home
      </a>
                            <div className="navbar-item has-dropdown is-hoverable">

                                <div className="navbar-dropdown is-boxed">





                                    <hr className="navbar-divider" />
                                    <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                                        Elements
          </a>
                                    <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                                        Components
          </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <CoolButton className="button is-rounded is-hovered is-dark my-class is-success is-small">Login</CoolButton>
                                        <CoolButton className="button is-danger is-small is-rounded">Signup</CoolButton>

                                    </p>
                                    <p className="control">

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}