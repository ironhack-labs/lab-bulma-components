import React from 'react';

import './App.css';
import NavBar from './components/nav-bar-component/nav-bar';
import Container from './components/container-component/container';

class App extends React.Component {
  render() {
  
  
  return (
    
      <div className="App">
        <NavBar/>
        <div className = "main-content">
        <Container />
        </div>
      </div>
    );
  }
  
}

export default App;
