//Importar react
import React from "react";
import {Link} from "react-router-dom";
import CoolButton from "../button/CoolButton";
import '../button/CoolButton.css';

//Construir el componente
const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width={112}
            height={28}
          />
        </a>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
			<Link to="/">
              <p className="control">
                  <CoolButton classes="btn button is-small is-white" value="Login"/>
              </p>
			  </Link>
              <Link to="/signup">
			  <p className="control">
                  <CoolButton classes="btn button is-small is-primary" value="Signup"/>
              </p>
			  </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
