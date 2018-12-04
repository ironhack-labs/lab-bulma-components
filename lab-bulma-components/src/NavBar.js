import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NavBar extends Component {

  state = { 
    message:'Not Ross'
  } 

  changeState = () => {

    this.setState({message:'Ross!'})
  }
  
  render(){
   
   return (
    <div>
  <nav className="nav-bar-component">
      <div className='nav-bar-to-the-left'>
     
      <button onClick={this.changeState}>change</button>
      <img src='favicon.ico' className="App-name-logo"/>
      <a href="#">Bulma</a>
      </div>
      <div className="div-to-the-right">
      <button>Login</button>
      <button>Sign up</button>
      </div>
      {this.state.message}
  </nav>
      </div>
  )
  }
}
export default NavBar;