import React, {Component} from "react";
import "./Nav.css"

class Nav extends Component {
    render(){
        return (
        
            <nav className="navbar is-transparent">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io" />
                <img src="https://bulma.io/images/bulma-logo.png"/>
                <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>
      </div>
      </div>
      
            <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary" href="signup.html">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
</nav>
       
        )
    }
}

export default Nav;