import React from "react";


function NavBar(props) {
    console.log('The prop is: ', props)
	return (
		<nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span />
                <span />
                <span />
                </div>
            </div>
            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
                    </a>
                    <a className="navbar-item" href="https://bulma.io/">
                        Login
                    </a>
                    <a className="navbar-item" href="https://bulma.io/">
                        Signup
                    </a>
                </div>
                
            </div>
        </nav>
	);                     
}   



export default NavBar;
