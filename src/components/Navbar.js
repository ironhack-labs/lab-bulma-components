import CoolButton from "./CoolButton";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
          </a>

          <a href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>

            <a href="/" className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a href="/" className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a href="/" className="navbar-item">
                  About
                </a>
                <a href="/" className="navbar-item">
                  Jobs
                </a>
                <a href="/" className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a href="/" className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <CoolButton isSuccess> Sign Up </CoolButton>
                <CoolButton> Log In </CoolButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <button onClick={props.changeState}>CHANGE STATE</button> */}
    </>
  );
};
// }

export default Navbar;
