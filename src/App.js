import React from 'react';
import 'bulma/css/bulma.css'
import Navbar from './navbar/Navbar'
import FormField from './formField/FormField'
import Signup from './Signup'
import Message from './Message'




const App = () => {
  return <div>
    
    <Navbar />

    <FormField 
    label="Name" 
    type="text" 
    placeholder="e.g Alex Smith" />

    <FormField 
    label="Email" 
    type="email" 
    placeholder="e.g. alexsmith@gmail.com" />

    <Signup />

    <Message isInfo title='Hello World'
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    strong="Pellentesque risus mi.">
      </Message>

  </div>;
};

export default App;
