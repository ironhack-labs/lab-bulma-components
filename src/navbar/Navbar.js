import 'bulma/css/bulma.css';
import React from 'react'



const Navbar = () => 
<nav className="navbar is transparent">
    <div className="navbar-brand">
        <a className="nabvar-item" href="https://bulma.io">
         <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>   
        </a>
        <button className="button is-rounded my-class is-danger is-small">
        Signup
        </button>
        <button class="button is-small is-success">
        Login
        </button>
    </div>
</nav>;


export default Navbar