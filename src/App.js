import React from 'react';

//Import - Components
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButtonList'


const App = () => {
  return (
    <div>
      < Navbar />
      < FormField type='text' placeholder='e.g Alex Smith' />
      < FormField type='email' placeholder='e.g. alexsmith@gmail.com' />
      <CoolButton className="button is-rounded my-class is-danger is-small" value="Button1"/>
    </div>
  );
};

export default App;
