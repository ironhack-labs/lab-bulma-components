import React from "react";
export const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}
const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
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
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <CoolButton isSmall isInfo>Login</CoolButton>
                <CoolButton isSmall isSuccess>Signup</CoolButton>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
const FormField = ({ label, type, placeholder }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  )
}
// To be able to use spread operator
// https://stefan.magnuson.co/articles/frontend/using-es7-spread-operator-with-webpack/
const CoolButton = ({ children, className="",...rest }) => { 
  console.log(rest)
  let restObj = Object.keys(rest).map(p=>{
    return p.replace(/([A-Z])/,"-$1").toLowerCase()
  })
  console.log(restObj)
  className+=" button "+restObj.join(" ")
  console.log(className)
  return (
    <button className={className} >{children}</button>
  )
}
const Signup = () => {
  return (
    <form>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g John Rambo" />
      <FormField label="Email" type="email" placeholder="e.g. john@rambo.com" />
      <FormField label="Password" type="password" placeholder="************" />
      <CoolButton isSuccess>Submit</CoolButton>
    </form>
  )
}