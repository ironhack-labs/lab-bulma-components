import React from 'react';
import './App.css';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Signup from './Signup';

class App extends React.Component {
state = {
  signup: false,
  message:false
}
render() {
  return (
   <div className="App">
    <nav className="navbar is-transparent">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
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
                </a></div></div>
          <div className="navbar-end">
          <div className="navbar-item">
          <div className="field is-grouped">

<CoolButton  className={"button is-primary is-focused is-medium"} onClick={()=>{this.setState({signup:true})}}>Sign up</CoolButton>
<CoolButton  className={"button is-light is-focused is-medium"}>Log in</CoolButton>

          
        </div>
      </div>
    </div>
          </nav>  
 
  Name <FormField type={"text"} placeholder={"e.g Alex Smith"}/>
  Email <FormField type={"text"} placeholder={"e.g. alexsmith@gmail.com"}/>
  
  <CoolButton className={"button is-rounded is-danger is-small"}>Button 1</CoolButton>

  <CoolButton className={"button is-small is-success"} onClick={()=>{this.setState({message:true})}}>Button 2</CoolButton>
 
   
  {this.state.message ?
    <article className="message is-info" style={{width:"300px"}}>
                <div className="message-header">
                <p>Hello World</p>
                <button className="delete" aria-label="delete" onClick={()=>{this.setState({message:false})}} ></button>
                </div>
                <div className="message-body">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>
                </div>
                </article>
                
 : null}

  {this.state.signup ?<Signup/>: null}

  </div>
  
  );
  }
}

export default App;

