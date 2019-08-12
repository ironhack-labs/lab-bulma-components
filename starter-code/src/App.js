import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <nav class="navbar is-transparent">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
              </a>
              <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
              <div id="navbarExampleTransparentExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="https://bulma.io/">
                  Home
                </a>
                
              </div>

              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="field is-grouped">
                    <p class="control">
                      <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                        <span class="icon">
                          <i class="fab fa-twitter"></i>
                        </span>
                        <span>
                          LogIn
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.5/bulma-0.7.5.zip">
                        <span class="icon">
                          <i class="fas fa-download"></i>
                        </span>
                        <span>Download</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
           
          <div class="columns">
            <div class="column">
            
            </div>
            <div class="column">
              
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                <input class="input" type="text" placeholder="Text input"/>
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
                </div>
              </div>
            </div>
            <div class="column">
             
            </div>
            <div class="column">
            </div>
          </div>

          <div class="columns">
              <div class="column">
             
              </div>
              <div class="column">
             
              </div>
              <div class="column">
                <button class="button is-rounded my-class is-danger is-small">Button 1</button>
                <button class="button is-small is-success">Button 2</button>
              </div>
              <div class="column">
              
              </div>
              <div class="column">
              
              </div>
          </div>

    </div>
  );
}

export default App;
