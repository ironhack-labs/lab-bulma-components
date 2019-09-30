import React, { Component } from "react";
import Brand from "./Brand";
// import Login from "./Login";
// import Signup from "./Signup";
import Home from "./Home";
import CoolButton from "./CoolButton";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <Brand />
        <Home />
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              {/* <Login />
              <Signup /> */}
              <p className="control"><CoolButton Button isInfo href="#"><span>Login</span></CoolButton></p>
              <p className="control"><CoolButton Button isPrimary href="#"><span>Signup</span></CoolButton></p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
