import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import SignUp from './components/SignUp'


function App() {
  return (
    <div className="App">
        <Navbar />
    <>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </>
    <>

        <CoolButton className="isSmall isDanger isRounded" name="Button 1"></CoolButton>
        <CoolButton className="isSmall isSuccess" name="Button 2"></CoolButton>
    </>
    <>
        <SignUp />
    </>
    </div>
  )
}

export default App;
