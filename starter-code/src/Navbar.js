import React from "react"
import "./Navbar.css"
import CoolButton from "./CoolButton"


function Navbar() {

return <nav className="navbar">
  
       <a className="navbar-item">Home</a>
       <div className="buttons">
       <CoolButton type="is-danger" class="is-rounded" input="log-in"/>
       <CoolButton type="is-info" class="is-rounded" input="sign-up"/>    
       </div>

</nav>

}

export default Navbar;