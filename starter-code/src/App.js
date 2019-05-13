import React from 'react';
import './App.css';
import Navbar from './Navbar';
import FormField from './FormField';
import Signup from './Signup';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Navbar />
      <FormField />
      <Signup />
    </div>
  );
}
}

export default App;
