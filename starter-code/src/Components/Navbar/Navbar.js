import React, { Component } from "react";



class Navbar extends Component {
  render() {
    return (
    
       <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
            </a>
          </div>
      
   <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
   <span aria-hidden="true"></span>
   <span aria-hidden="true"></span>
   <span aria-hidden="true"></span>
 </a>
 
 <div id="navbarBasicExample" class="navbar-menu">
   <div class="navbar-start">
     <a class="navbar-item">
       Home
     </a>
       </div>
     </div>
   

   <div class="navbar-end">
     <div class="navbar-item">
       <div class="buttons">
         <a class="button is-primary">
           <strong>Sign up</strong>
         </a>
         <a class="button is-light">
           Log in
         </a>
       </div>
     </div>
   </div>

</nav>
   
   );
  }
}

export default Navbar;