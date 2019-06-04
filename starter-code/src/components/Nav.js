import React from "react"
import CoolButton from "./Button"

const Nav = () => {
  return (
    // <nav>
    //   <img src=""/>
    //   <a>Home</a>
    //   <a>Login</a>
    //   <a>SignUp</a>
    // </nav>

  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      
      <a className="navbar-item" href="https://bulma.io"><img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" /></a>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
    </div>

    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        <a id="home" className="navbar-item" href="#">Home</a>
      
        <div className="navbar-item has-dropdown is-hoverable">
          
          <div className="navbar-dropdown is-boxed">
            <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">Overview</a>
            <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">Modifiers</a>
            <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">Columns</a>
            <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">Layout</a>
            <a className="navbar-item" href="https://bulma.io/documentation/form/general/">Form</a>
            <hr className="navbar-divider" />
            <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">Elements</a>
            <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">Components</a>
          </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          {/* <p className="control">
            <a className="bd-tw-button button" href="#">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                Login
              </span>
            </a>
          </p> */}
          <CoolButton names={["is-small", "is-success"]}>Login</CoolButton>
          {/* <p className="control">
            <a id="signUp" className="button is-primary" href="#">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>SignUp</span>
            </a>
          </p> */}
          <CoolButton names={["is-small", "is-danger", "is-rounded"]}>SignUp</CoolButton>

        </div>
      </div>
    </div>
  </div>
</nav>



  )
}

export default Nav