import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import SignUp from './component/SignUp';
import Message from './component/Message';
import 'bulma/css/bulma.css';

const App = () => {

  return (

    <div className ="App">

      <header>
      
        <SignUp />

        <Message />

        </header>
     
    </div>

  )
};

export default App;
