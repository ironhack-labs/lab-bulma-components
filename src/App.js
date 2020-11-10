import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import {ButtonOne} from './coolbutton/CoolButton';
import Message from './mess/Message';
import 'bulma/css/bulma.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <form className="container">
         <FormField label="Nome" type="text"/>

         <FormField label="Email" type="email"/>

         <FormField label="Password" type="password"/>

         <ButtonOne text="Submit"></ButtonOne>

            <Message />
        </form>
        
    </div>
    
  )
};

export default App;
