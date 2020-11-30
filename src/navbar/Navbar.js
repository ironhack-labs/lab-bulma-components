import 'bulma/css/bulma.css';
import React from 'react'
import CoolButton from '../CoolButton/CoolButton.js'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar is-fixed-top" is-transparent="true">
            <a href="">Home</a>
            <CoolButton className="button is-success">Login</CoolButton>
            <CoolButton className="button is-danger">Signup</CoolButton>
        </nav>
    )
}
