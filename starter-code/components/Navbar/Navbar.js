import React from 'react'
import ReactDOM from 'react-dom'
import CoolButton from '../CoolButton/CoolButton'


const Navbar = () =>{

  document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
  return (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
      </a>
      <a className="navbar-item" href="https://bulma.io/">
          Home
        </a>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
         
          <CoolButton  isInfo isMedium> Log in</CoolButton>
      
          <CoolButton  isPrimary isMedium> Sign up</CoolButton>
        </div>
      </div>
    </div>
</nav>
)
}

export default Navbar