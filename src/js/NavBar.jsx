import React from "react";
import logo from "../resources/doge1.jpeg";

class NavBar extends React.Component {
  render() {
    return (
      <div
        className="navbar"
        // role="navigation"
        // aria-label="main navigation"
      >
        <div className="navbar-start">
          <div className="navbar-brand">
            <img src={logo} alt="brand" />
          </div>
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                {/* <a
                    class="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://localhost:4000"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
                  >
                    <span class="icon">
                      <i class="fab fa-twitter" />
                    </span>
                    <span>Tweet</span>
                  </a> */}
                <button className="button is-warning">Login</button>
                <button className="button is-rounded is-primary">SignUp</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
