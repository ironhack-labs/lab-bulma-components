import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Divs extends Component{

    render(){
        return(
            <div className="main-div-for-navbar">
                <div className="Logo">
                    <img src ={logo} alt="h" />
                    <a href="/#">Home</a>
                </div>

                 <div className="buttons">
                    <button id="login">Login</button>
                    <button id="signup">Signup</button>
                  </div>
            </div>
        
        );
    }

}




export default Divs;