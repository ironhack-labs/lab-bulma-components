import React from 'react';

class SignUp extends React.Component {
    render() {
    return(
    <div>
    <nav className= "navbar is-transparent">
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

                <div className="navbar-end">
                    <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="button is-rounded my-class is-danger is-small">
                            <span>
                                Login
                                </span>
                            </a>
                            </p>
                                <p className="control">
                                <a className="button is-small is-success">
                            <span>Sign Up</span>
                            </a>
                            </p>
                            </div>
                        </div>
                    </div>
            </nav>
        
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                <input className="input" type="text" />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                <input className="input" type="email" />
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                <input className="input" type="password" />
            </div>
            </div>
            <button className="button is-rounded my-class is-danger is-small">Sign Up</button>
        </div>
        );
    }
}

export default SignUp;