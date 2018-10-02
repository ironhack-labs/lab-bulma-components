import React, {Component} from 'react';


class Nav extends Component {



  show = () => {
    const valor = false;
    this.props.funcion(valor)
  }

hide = () => {
  const valor = true;
  this.props.funcion(valor)
}

  render() {

    return (
      <nav className="navbar is-transparent">
        <a className="navbar-item" href="https://bulma.io">
         <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
        </a>
       <a className="navbar-item" href="https://bulma.io/">
        {this.props.title}
      </a>
        <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
          <button onClick={this.show} className="button is-rounded my-class is-danger is-small">Login</button>
          </p>
          <p className="control">
          <button onClick={this.hide} className="button is-small is-success">Signup</button>
          </p>
        </div>
      </div>
    </div>
      </nav>
    )

  }

}

export default Nav;