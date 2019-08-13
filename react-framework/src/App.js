import React from 'react';
import './App.css';
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'

function App() {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">

            </div>
            <div id="navbarExampleTransparentExample" class="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                  Home
      </a></div>
              <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                  <CoolButton isSmall isDanger class="button is-rounded my-class is-danger is-small">Signup</CoolButton>
                </a></div>
              <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                  <CoolButton isSmall isSuccess class="button is-small my-class is-success">Login</CoolButton>
                </a>

              </div>
            </div>
          </div>
        </nav>
      </header >
      <main>
        <FormField />

      </main>
    </React.Fragment>
  );
}

export default App;
