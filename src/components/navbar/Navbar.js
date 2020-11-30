import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/CoolButton'

const Navbar = props => {

    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io/"><img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma Logo"></img></a>
      
          <a href="https://bulma.io/" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a href="https://bulma.io/" class="navbar-item">Home</a>
            </div>
          </div>
      
          <div class="navbar-end">
          <div class="navbar-item">
            
              <CoolButton class="button is-rounded my-class is-danger is-small" name="Log In" />
              <CoolButton class="button is-small is-success" name="Log Out" />
              
             {/* <div class="buttons">        
                <a href="https://bulma.io/" class="button is-info">Log in</a>
                <a href="https://bulma.io/" class="button is-primary">Sign up</a>
              </div> */}
            </div>
        </div>
      </nav>
            
    )

}

export default Navbar