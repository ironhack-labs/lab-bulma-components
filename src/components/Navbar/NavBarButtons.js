import React from "react";

function NavBarButtons() {
  return (
    <div className="navbar-item">
      <div className="field is-grouped">
        <p className="control">
          <a
            className="bd-tw-button button"
            data-social-network="Twitter"
            data-social-action="tweet"
            data-social-target="https://bulma.io"
            target="_blank"
            href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
          >
            <span className="icon">
              <i className="fab fa-twitter"></i>
            </span>
            <span>Tweet</span>
          </a>
        </p>
        <p className="control">
          <a
            className="button is-primary"
            href="https://github.com/jgthms/bulma/releases/download/0.9.1/bulma-0.9.1.zip"
          >
            <span className="icon">
              <i className="fas fa-download"></i>
            </span>
            <span>Download</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default NavBarButtons;
