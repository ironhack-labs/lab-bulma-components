import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from "./navbar/Navbar"
import Formfield from "./formfield/Formfield"
import CoolButton from "./coolButton/CoolButton"
import Signup from './components/signup';
import Message from './components/message'
import Container from './components/container'
const App = () => {

  return (
<div className="container">
    <Signup/>
    <Message className='message is-info' title='Hello World' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'textStrong= 'Pellentesque risus mi.'/>
    </div>
  )
}

export default App;
