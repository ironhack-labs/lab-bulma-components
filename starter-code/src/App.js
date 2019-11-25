import React from "react";
// import "./App.css";

const NavBar = () => {

  return (
      
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
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
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
              <CoolButton className="button is-rounded my-class">Login</CoolButton>
              </p>
              <p className="control">
              <CoolButton className="button is-rounded my-class">Signup</CoolButton>
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const FormField = props => {

    return (
<div className="field">
  <label className="label">{props.label}</label>
  <div className="control">
    <input className="input" type={props.type} placeholder={props.placeholder} />
  </div>
</div>
    );
};

const CoolButton = props => {
console.log(props)
// let clName = `button ${props} ${props.className}`;
return (

<button className={props.className}>{props.children}</button>

);
};

const SignUp = () => {

    return (
        <div>
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="e.g. Salut1234" />
        <CoolButton className="button is-rounded my-class">Submit</CoolButton>
        </div>
    );

};



const App = () => {

  return (
  <div>
  <NavBar />
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <CoolButton className="button is-rounded my-class is-small is-danger">Button 1</CoolButton>
    <CoolButton className="button is-small is-success">Button 2</CoolButton>
    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
    <SignUp />
  </div>
  );

};

export default App;
