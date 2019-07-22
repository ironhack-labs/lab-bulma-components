import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './components/main/Main';
import Navbar from './components/layout/Navbar';
import FormField from './components/other/FormField';
import CoolButton from './components/other/CoolButton';
import SignUp from './components/main/SignUp';

function App() {
  return (
    <div className="App">
      {/* <div> Hi App</div>
      <div> <Main/> </div>
      <div> <Navbar/> </div>

      <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>

      <div>
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div> */}

      <div><SignUp/></div>




    </div>
  );
}

export default App;
