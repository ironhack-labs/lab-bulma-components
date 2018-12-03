import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Navbar extends Component{

    render(){
        return (
            <nav className='nav navbar is-fixed-top'>
            <button type='button'>
              <a href='/SignIn'>Sign In</a>
            </button>
            
            <button type='button'>
            <a href='#'>Login</a>
            </button>
  
            <button type='button'>
            <a href='#'>Home</a>
            </button>
            
          </nav>
        )
    }
}




export default Navbar