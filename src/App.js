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
         <FormField label="Nome" type="text" placeholder="e.g Alex Smith"/>

         <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>

         <FormField label="Password" type="password" placeholder="Password"/>

         <ButtonOne text="Submit"></ButtonOne>

            <Message />
        </form>
        
    </div>
    
  )
};

export default App;
