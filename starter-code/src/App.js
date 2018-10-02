import React from "react";




const Navbar = () => {
    return (
        <div className="navbar is-transparent">
          <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
        </a>
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
                <button className="button is-primary">Login</button>
              </p>
              <p className="control">
                <button className="button is-info">Signup</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
}

const FormField = ({label,type,placeholder}) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder}/>
      </div>
    </div>
  )
}

const Button = ({className,text}) => {
  return (
    <button className={className}>{text}</button>
  )
}

const Field = () => {
  return (
    <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g alex.smith@email.com" />
      <FormField label="Password" type="password" placeholder="password" />
      <Button className="isSmall isSuccess" text="Submit"></Button>
    </div>
  )
}


                                    
export const App = () => {
    return (
      <div>
        <Navbar />
        <Field />
        </div>
    )
}