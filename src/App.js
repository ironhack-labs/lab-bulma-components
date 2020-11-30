import React, {Fragment} from 'react';
import Navbar from './navbar/Navbar'
import Formfield from './formfield/Formfield'
import Signup from './signup/Signup'

const App = () => {
  return (
    
      <Fragment>
        <Navbar/>
        <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
        <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <Signup/>
      </Fragment>
      

   
    

  )

};

export default App;
