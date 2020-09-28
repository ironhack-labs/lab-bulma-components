import React from 'react'
import CoolButton from '../coolbutton/CoolButton'



const Navbar = () => {

    return (

        <nav className='navbar is transparent'>
            <div className='navbar-brand'>
                <a className='navbar-item' href="https://bulma.io"><img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img></a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">Home</a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <CoolButton name="Login" className="button  is-info"></CoolButton>
                            </p>
                            <p className="control">
                                <CoolButton name="signup" className="button  is-success"></CoolButton>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </nav>



    )
}

export default Navbar