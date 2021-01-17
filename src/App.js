import React from 'react';

//Import - Components
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButtonList from './coolbutton/CoolButtonList'
import Signup from './signup/Signup'


const App = () => {
  return (
    <div>
      < Navbar />
      <p>Name</p>
      < FormField type='text' placeholder='e.g Alex Smith' />
      <p>Email</p>
      < FormField type='email' placeholder='e.g. alexsmith@gmail.com' />
      < CoolButtonList className="button is-rounded my-class is-danger is-small" value="Button1"/>
      <br/>
      <br/>
      <br/>
      <p>Signup Form</p>
      <Signup />
    </div>
  );
};

export default App;
