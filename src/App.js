import React from 'react';

//components
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'
import Buttons from './coolButtons/Buttons'
import Message from './message/Message'



//data
const buttonClasses = require('./data/buttons.json')

const App = () => {
  const formArr = [
    {label: 'Name',type: 'text', placeholder: 'e.g Alex Smith'},
    {label: 'Email',type: 'email', placeholder: 'e.g. alexsmith@gmail.com'},
    {label: 'Password',type: 'password', placeholder: '***********'}
  ]
  
  return (
 <>
  <Navbar />
  <div className="container">
  <FormField formArr={formArr} buttonName={'Login'} title='Login Page'/>
  <FormField formArr={formArr} buttonName={'Signup'} title='Signup Page'/>
  <Message title='Hello World' />
  <Buttons buttonClasses={buttonClasses}/>
  </div>
 </>

  );
};

export default App;
