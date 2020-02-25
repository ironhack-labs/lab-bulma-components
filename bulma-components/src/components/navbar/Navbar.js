import React from 'react'
import './Navbar.css'
import 'bulma/css/bulma.css';
import Coolbtn1 from '../btn/Coolbtn1'
import Coolbtn2 from '../btn/Coolbtn2'


const Navbar = props => {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
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
                        Home
                    </a>  
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Coolbtn1 text="Sign up"></Coolbtn1>
                            <Coolbtn2 text="Log in"></Coolbtn2>
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar