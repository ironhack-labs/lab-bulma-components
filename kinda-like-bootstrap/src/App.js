import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav-components/navbar'
import FormField from './components/form-components/forms'
import CoolButton from './components/form-components/button'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <div class="columns is-mobile">
          <div class="column is-4 is-offset-2">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div>
        <div class='column is-4 is-offset-2'>
          <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
          <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </div>
      </div>
    );
  }

}

export default App;
