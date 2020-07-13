import React from 'react'

//css
import './nav.css'
import 'bulma/css/bulma.css';

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

            <Button isSmall isDanger className='is-rounded' button='Login'/>
            <Button className='button is-small is-success' button='Sign-up' />

        </nav>

    )
}

export default nav