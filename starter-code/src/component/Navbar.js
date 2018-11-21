import React, { Component } from 'react';


class Navbar extends Component{
    render(){
        return (
      <nav>
        <div className="nav-wrapper">
            <img className="ml-4" src='/logo.png' alt="nav" width='180px' height='100px'/>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li className="ml-2">Lucía Martínez <img className="ml-2" src='/usuario.png' alt='usuario' width='30px' /></li>
              <li className="ml-2">Carrito <strong style={{fontSize:24}}>0</strong></li><img className="ml-2 mr-2 mt-8" src='/carrito.png' alt='carrito' width='30px'/>
            </ul>
        </div>
      </nav>
    )
  }
} 

export default Navbar;