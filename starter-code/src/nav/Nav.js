import React, {Component} from "react";
import ButtonField from "../button/Button"

class NavBar extends Component{

  render(){
    return(
      <nav class="navbar is-transparent">
       <div class="navbar-brand">
         <a class="navbar-item" href="https://bulma.io">
           <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
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
         <div class="navbar-end">
           <div class="navbar-item">
             <div class="field is-grouped">
               <p class="control">
                   <span class="icon">
                     <i class="fab fa-twitter"></i>
                   </span>
                   <ButtonField className='button is-rounded my-class is-small is-sucess' value="Login"/>
               </p>
               <p class="control">
                 <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.4/bulma-0.7.4.zip">
                   <span class="icon">
                     <i class="fas fa-download"></i>
                   </span>
                   <span>Signup</span>
                 </a>
               </p>
             </div>
           </div>
         </div>
       </div>
       </div>
     </nav>
    )
  }

   
}

export default NavBar