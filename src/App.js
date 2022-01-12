import React from 'react';
import reactDom from 'react-dom';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';



const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      </div>
      <div>
      <CoolButton className="button"></CoolButton>
      </div>  
    </div>
  )
  
};

export default App;

