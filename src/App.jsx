import React from 'react';
import NavBar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Signup from './components/Signup';

import 'bulma/css/bulma.css';


class App extends React.Component () {
  render() {
    return (
      <div>

        <NavBar>

        <Signup />

          <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
          <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </NavBar>

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

        <CoolButton />
      </div>
      

      
    )
  }
  
    
};

export default App;
