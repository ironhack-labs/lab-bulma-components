 import React from 'react';
//import React, { Component } from 'react';
import './App.css';

import Navbar from "../src/navbar/Navbar";
import FormField from "../src/formfield/FormField";
import CoolButton from "../src/coolbtn/CoolButton";

import Message from "../src/message/Message";
import Signup from "../src/signup/Signup";




// componente funcional sem estado, é apenas uma função que devolve html tudo dentro de uma div pai
 const App = () => {

  return (
    <div>
      {/* <h1>Bulma</h1>  */}
      <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      <CoolButton style="isDanger is-rounded">Button 1</CoolButton>
      <CoolButton style="isSuccess">Button 2</CoolButton>

      <Message class='message isInfo' title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>

      <Signup />
    </div>
  );
};

// componente de classe COM ESTADO
// class de component nativa do react tem de ser incluida no import

// class App extends Component {
//     render() {
//       return (
//           <Navbar />  
//       )
//   }
// }

export default App;
