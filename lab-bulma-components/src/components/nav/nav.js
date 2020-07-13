import React from 'react'

//css
import 'bulma/css/bulma.css';
import './nav.css'

//components
import Button from '../button/button'

const nav = () => {

    return (

        <nav className='is-transparent'>
        
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                </a>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="#">
                        Home
                    </a>
                </div>
            </div>

            <Button className='buttonsNav' button1='Login' button2='Sign-up' />

        </nav>

    )
}

export default nav