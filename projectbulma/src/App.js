import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import Signup from './components/Signup'
import './styles/cool-button.css'

function App() {
  return ( <div>
      <div> <Navbar /></div>
      <div className="element-container">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton numOfButtons={2} />
      </div>
      <div>
        <Signup />
      </div>
    </div>
  );
}

export default App;
