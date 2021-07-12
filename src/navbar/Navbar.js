import React from 'react';
import CoolButton from '../coolbutton/CoolButton'


function Navbar(){
    return (
<nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
    </a>
    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
        <div className="navbar-item has-dropdown is-hoverable">
        <div className="navbar-dropdown">
        </div>
        </div>
    </div>
    <div className="navbar-end">
    <div className="navbar-item">
        <CoolButton  isSmall={'is-small'}  isDanger={'is-danger'}   className = "is- round my-class" > Log In </CoolButton > 
        < CoolButton  isSmall={'is-small'} isSuccess={'is-success'} > Sign in</CoolButton>
        
    </div>
    </div>
</div>
</nav>

)}
export default Navbar;