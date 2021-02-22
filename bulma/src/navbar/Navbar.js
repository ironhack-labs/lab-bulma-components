import './Navbar.css'
import 'bulma/css/bulma.css'

const Navbar = () => {
    return (
        <nav className="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="#">
        Home
      </a>
      
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
        <p className="control">
            <a className="button is-info" href="#">
            <span className="icon"/>
              <span>Login</span>
            </a>
          </p>
          <p className="control">
            <a className="button is-primary" href="#">
              <span className="icon"/>
              <span>Singup</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  
</nav>
    )


}

export default Navbar