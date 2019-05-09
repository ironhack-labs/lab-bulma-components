import React, { Component } from "react";
import CoolButton from "./Coolbutton.js";

class Navbar extends Component {
    render() {
        let obj = {
            name1: 'Log in',
            name2: 'Sign up',
        }
        return (
            <div className="navbar-menu">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io"><img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img> </a>
                </div>
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
                     </a>
                </div>
                <div className="navbar-end">
                    <CoolButton isSuccess name={obj.name2} />
                    <CoolButton isDanger className='is-rounded my-class' name={obj.name1} />
                </div>
            </div>
        );
    }
}

export default Navbar;
