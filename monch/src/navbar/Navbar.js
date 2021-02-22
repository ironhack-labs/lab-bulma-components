import React from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css';
import CoolButton from '../coolbutton/CoolButton';


class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className='navbar is-light is-transparent'>
                    <div className='navbar-brand'>
                        <a className='navbar-item' href='#'>
                            <img
                                src='https://bulma.io/images/bulma-logo.png'
                                alt='Bulma: a modern CSS framework based on Flexbox'
                                width='112'
                                height='28'
                            />
                        </a>
                    </div>
                    <a class="navbar-item" href="https://bulma.io/">
                        Home
                    </a>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a class="button is-info">
                                    <strong>Log in</strong> 
                                </a>
                                {/* <CoolButton typeButton="button is-primary is-rounded" text="Log In"/>
                                <CoolButton typeButton="button is-primary is-outlined" text="Sign up"/>    */}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;



