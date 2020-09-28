import React from "react"


const Navbar = props => {
    return (
    <nav class="navbar is-transparent">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" /> </a>

                </div>

                    <div id="navbarExampleTransparentExample" class="navbar-menu">
                        <div class="navbar-start">
                        <a class="navbar-item" href="https://bulma.io/"> Home</a>
                        </div>
            
                            <div class="navbar-end">
                                <div class="navbar-item">
                                    <div class="field is-grouped ">
                                            {props.login}
                                            {props.singup}
                                    </div>
                                </div>
                            </div>
                     </div>
    </nav>
    )
}

export default Navbar