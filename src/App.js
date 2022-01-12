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
      
    </div>
  )
  
};

export default App;

/*
<CoolButton isSmall isDanger  className="cool-button is-rounded my-class">Button 1</CoolButton>
    <CoolButton isSmall isSuccess>Button 2</CoolButton>  */