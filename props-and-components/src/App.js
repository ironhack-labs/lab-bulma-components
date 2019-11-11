import React from 'react';
import logo from './logo.svg';
import './FormField.css';
import './App.css';
import Navbar from './Navbar';
import FormField from './FormField'
import CoolButton from './CoolButton'
import './SignUp.css'
import SignUp from './SignUp'

class App extends React.Component {
render(){

  return (
    <body>
    <Navbar />
    <FormField className='FormField' label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField className='FormField' label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
    <CoolButton isSmall isSuccess>Button 2</CoolButton>
    <SignUp />
    </body>
  );
      }
    }
export default App;
