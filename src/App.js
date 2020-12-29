import React from 'react';

import 'bulma/css/bulma.css';
import './App.css';

import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './button/CoolButton';

import Signup from './signup/Signup'


const App = () => {

  return (

    <div className="App">

      <Navbar />

      <div className="Form">
        <FormField myLabel="Name" myType="text" myPlaceholder="e.g Alex Smith" />
        <FormField myLabel="Email" myType="email" myPlaceholder="e.g. alexsmith@gmail.com" />
      </div>

      {/* <CoolButton className="my-class" isSmall={true} isDanger={true} isRounded={true} >Button 1</CoolButton> */}

      {/* className="my-class" will be passed to the component through props
        you need to decide which HTML element should it be added to
        if you won't do it, it will be ignored in DOM */}

      {/* HTML DOM: <button class="my-class button is-rounded is-danger is-small">Button 1</button> */}

      {/* <CoolButton isSmall={true} isSuccess={true} >Button 2</CoolButton> */}

      {/* HTML DOM: <button class="undefined button is-success is-small">Button 2</button> */}

    </div>
  );
};

export default App;
