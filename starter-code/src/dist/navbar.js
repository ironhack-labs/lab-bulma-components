import React from "react";
import CoolGreenButton from "./coolbutton"
import CoolRedButton from "./coolbutton"

const Navbar = (
    <header>
        <nav className='navbar is-transparent'>
            <div className='navbar-brand'>
                <a className='navbar-item' href="">
                    <img width="112" height="28" src="https://bulma.io/images/bulma-logo.png" alt="" />
                </a>
                <a className='navbar-item' href="">Home</a>
                <a className='navbar-item' href=""><CoolGreenButton name="Login" isSmall isSuccess></CoolGreenButton></a>
                <a className='navbar-item' href=""><CoolRedButton name="Signup" isSmall isDanger className="is-rounded my-class">Signup</CoolRedButton></a>
            </div>
        </nav>
    </header>
)

module.exports = Navbar;