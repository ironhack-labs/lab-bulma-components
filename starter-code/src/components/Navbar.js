import React, {Component} from 'react';
//import Button2 from './components/Button';
import {Button} from 'react-bulma-components';


export class Navbar extends Component {

    render(){
        return(
            <div className = 'Navbar'>
            <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
    
  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="#">
        Home
      </a>
    
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <Button className="button is-link"><span>Login</span></Button>
          </p>
          <p className="control">
          <Button className="button is-primary">
          <span><a href="/Form"></a>Signin</span>
          </Button>
          <a className="navbar-item" href="./Form">
        SIGNIN
      </a>
           
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
                
            </div>
        )
       
    }
}


