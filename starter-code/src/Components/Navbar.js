import React, { Component } from 'react';
import CoolButton from './CoolButton';

class Navbar extends Component {
    render() {        
        console.log(this.props);        
        return (
            <div className='Navbar'>
                <nav class="navbar is-transparent">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                    </div>
    
                    <div id="navbarExampleTransparentExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item" href="https://bulma.io/">
                                Home
                            </a>
                        </div>
                    </div>
                    
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="field is-grouped">

                            {/* {this.props.children.map(x => <CoolButton button={x.props.button}>{x.props.children}</CoolButton>)} */}
                            <p class="control">
                                <CoolButton button='is-info'>
                                    Login
                                </CoolButton>
                            </p>

                            <p class="control">
                                <CoolButton button='is-primary'>
                                    Signup
                                </CoolButton>
                            </p>
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }    
}

export default Navbar;