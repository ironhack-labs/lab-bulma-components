import "./Navbar.css";
import CoolButton from "./CoolButton";

import "bulma/css/bulma.css";

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          ></img>
        </a>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <CoolButton type='submit' class="button is-primary" name="Login" />
              </p>
              <p class="control">
                <CoolButton type='submit' class="button is-info" name="Signup" />
              </p>
            </div>
          </div>
        </div>

        {/* <CoolButton class="button is-primary" name="Login" />
        <CoolButton class="button is-info" name="Signup" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
