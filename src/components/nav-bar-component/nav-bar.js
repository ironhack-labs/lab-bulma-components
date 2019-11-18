import React from 'react';
import './nav-bar.css';
import CoolButton from '../cool-button-component/cool-button';
class NavBar extends React.Component {
    render() {
        const buttons = [{name:'Login', type:'button',class:'button is-primary'},{name:'Signup', type:'button',class:'button is-success'}];
        return (
        
<nav className="navbar is-transparent">
     <div id="navbarExampleTransparentExample" className="navbar-menu nav">
      <div className="navbar-brand brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
        </a>
     </div>
    <div className ="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div> 
    <div className="navbar-start home">
      <a className="navbar-item" href="https://bulma.io/" >
        Home
      </a>
    </div>
   

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <div className="control">
          <CoolButton  button={buttons[0]}/>
          </div>
          <div className="control">
          <CoolButton  button={buttons[1]}/>
          </div>
        </div>
      </div>
    </div>

  </div>
</nav>     
        );
    }
}
export default NavBar; 