import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Site made with <strong>Bulma</strong> by <strong>Pepe Valderrama</strong>
          </p>
          <p>
            View my profile in <strong><a href="https://github.com/PepeValderramaRegueira" target="_blank">Github</a></strong>
          </p>
        </div>
      </footer>
    );
  }
}
