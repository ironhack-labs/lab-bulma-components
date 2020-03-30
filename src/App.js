import React from 'react';
import Navbar from './navbar/Navbar';
import Formfield from './formfield/Formfield';
import Message from './message/Message';
import CoolButton from './CoolButton';
import Signup from './signup/Signup';
import 'bulma/css/bulma.css';


const App = () => {
  return (<div><Signup />
    <Navbar button={
      <div>
          <CoolButton isInfo>Signup</CoolButton>
          <CoolButton className="button is-primary">Login</CoolButton>
      </div>
    }/>
    <Formfield label="name" type="text" placeholder="Raúl Marchán"/>
    <Formfield label="mail" type="email" placeholder="r.marchan@mail.com"/>
    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
    <CoolButton isSmall isSuccess>Button 2</CoolButton>
    <Message isInfo title='Hello World'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </Message>
  </div>);
};

export default App;
