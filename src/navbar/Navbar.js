import React from 'react'
import 'bulma/css/bulma.css'
import CoolButton from 'coolbutton/CoolButton.js'


const Navbar = () => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
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
                    <div className="navbar-item has-dropdown is-hoverable">
                    </div>
                </div>
      
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                <span className="icon">
                                <i className="fab fa-twitter"></i>
                                </span>
                                <span>
                                Login
                                </span>
                            </a>
                            </p>
                            <p className="control">
                            <CoolButton isSmall isDanger='is-danger' className="is-rounded my-class">Signup</CoolButton>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    
  
    )
}

export default Navbar
