import 'bulma/css/bulma.css';
import './Navbar.css';
import CoolButton from '../CoolButton/CoolButton.js';

import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
          <p>Home</p>
        </a>
        <div>
          <CoolButton isSmall isDanger className="is-rounded my-class">
            Button 1
          </CoolButton>
          <CoolButton isSmall isSuccess>
            Button 2
          </CoolButton>
        </div>
      </div>
    </nav>
  );
}
