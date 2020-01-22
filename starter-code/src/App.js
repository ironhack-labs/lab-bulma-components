import React from 'react';
import Navbar from './components/Navbar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <FormField />
      <br></br>
      <CoolButton {primary}/>
    </div>
  );
}



export default App;
