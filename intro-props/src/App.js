import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Form from './components/Form'
import ButtonTemp from './components/ButtonTemp'

function App () {
  return (
    <div>
      <Navbar />
    
      <Form inLabel= "Name" 
            theType= "text"
            thePlaceHolder= "e.g Jose De la Cruz"
       />

      <Form inLabel= "Email" 
            theType= "text"
            thePlaceHolder= "e.g jdelacruzjose@gmail.com"
       />  

       <ButtonTemp isRounded isSuccess/>
       <ButtonTemp isRounded isDanger/>

    </div>
  );  
}

export default App;
