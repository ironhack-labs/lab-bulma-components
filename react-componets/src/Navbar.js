import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Navbar extends Component {
    render() {
      return (
         <div className="navBar">
            <div>
                <a href=""> <h2>Home</h2></a>
            </div>
            <div>
                <button>Loggin</button>
                <button>Signup</button>
            </div>
        </div>
      );
    }
  }








export default Navbar;