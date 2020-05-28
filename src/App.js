import React, { Component } from 'react';
import NavBar from './navbar/Navbar';
import Formfield from './formfield/Formfield';
import 'bulma/css/bulma.css';
import Button from './button/button';


// const App = () => {
//   return <h1>Bulma</h1>;
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Formfield label ="name" placeholder ="name"/>
        <Formfield label = "email" placeholder ="email"/>
        <Button className="button is-warning" button="Button 1"></Button>
        <Button className="button is-success is-rounded" button="Button 2"></Button>

      </div>
    );
  }
}


export default App;
