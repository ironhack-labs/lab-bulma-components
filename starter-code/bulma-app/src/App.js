import React, {Component} from 'react';
import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar'
import FormField from './components/form/FormField'
import CoolButton from './components/button/CoolButton'

class App extends Component {

  render(){
  return (
    <div className='App'>
    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
    <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </div>
  );
  };
  
}

export default App;
