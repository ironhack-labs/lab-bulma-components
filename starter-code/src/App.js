import React, {Component} from 'react';
import 'bulma/css/bulma.css';

class App extends Component{
    render(){
        return(
            <div>

            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png"
                             alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
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
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <a className="bd-tw-button button" data-social-network="Twitter"
                                   data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank"
                                   href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
                                    <span>
                                             Login
                                    </span>
                                </a>
                            </p>
                            <p className="control">
                                <a className="button is-primary"
                                   href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
                                    <span>Signup</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g Alex Smith"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
                    </div>
                </div>

                <button className="button is-rounded my-class is-danger is-small">Button 1</button>
                <button className="button is-small is-success">Button 2</button>


            </div>



        )
    }
}
export default App