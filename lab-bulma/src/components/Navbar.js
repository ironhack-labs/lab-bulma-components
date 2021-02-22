import './Navbar.css'
import CoolButton from './CoolButton.js'

const Navbar =()=>{
    return(
<nav className="navbar is-transparent"> 
<div className="navbar-brand"> 
<a className="navbar-item" href="https://bulma.io"> 
<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/> 
</a> 
</div> 

<div id="navbarExampleTransparentExample" className="navbar-menu"> 
<div className="navbar-start"> 
<a className="navbar-item" href="https://bulma.io/"> Home </a> 
<div className="navbar-end"> 
<div className="navbar-item"> 
        <div className="navbar-item">
          <div className="field is-grouped">
          < CoolButton  typeButton="button is-primary is-rounded" text="Log In"/>
          < CoolButton  typeButton="button is-primary is-outlined" text="Sign up"/>          
          </div>
        </div>
      </div>
</div> 
</div> 
</div> 
</nav>
)
}
export default Navbar