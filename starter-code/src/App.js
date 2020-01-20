import React from 'react';
import Navbar from './components/Navbar.js';
import FormField from './components/FormField.js';
import CoolButton from './components/CoolButton.js';



class App extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>
    )
  }
}

export default App;


