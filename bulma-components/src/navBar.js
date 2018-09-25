import React, {Component} from 'react';
import CoolButton from './button.js';

class NavBar extends Component {
  render() {
    return(
        <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/documentation/overview/start/">
                Docs
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="/documentation/overview/start/">
                  Overview
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                  Modifiers
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <div className="control">
            <CoolButton btn="button is-primary" auth="Signup" />
          </div>
          <div className="control">
            <CoolButton btn="button is-success" auth="Login" />
          </div>
        </div>
      </div>
    </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

// className NavBar extends Component {
//   render() {
//     return(
//       <div>
//         <a classNameName={this.props.item} href={this.props.link}>{this.props.title}</a>
//       </div>
//     );
//   }
// }

// export default NavBar