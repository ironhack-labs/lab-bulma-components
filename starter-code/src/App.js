import React, {Component} from 'react';
//import './App.css'

import Nav from './components/Nav';
import Body from './components/Body';
import Signup from './components/Signup';

class App extends Component{

  state = {
    login: true
  }

  cambiar = (valor) => {
    this.setState({
      login:valor
    })
  }

  render() {
    return(
      <div className='App'>

        <Nav funcion={this.cambiar} />

        <div className="Body">

          {this.state.login == false ? <Body /> : <Signup />}
          

        </div>



      </div>

      
    )
  }
}

export default App;