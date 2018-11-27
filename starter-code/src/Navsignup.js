import React, {Component} from "react";
import "./Nav.css"

class Navsignup extends Component {
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
            <label>Name</label>
<Formfield label="input" type="text" placeholder="Alex Smith" />
<label>Email</label>
<Formfield label="Email" type="email" placeholder="alexsmith@gmail.com" />

    <Coolbutton/>
    </div>
</nav>
       
        )
    }
}

export default Navsignup;