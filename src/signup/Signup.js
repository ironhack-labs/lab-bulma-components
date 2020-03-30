import React from 'react';
import Navbar from '../navbar/Navbar';
import Formfield from '../formfield/Formfield';
import CoolButton from '../CoolButton';



const Signup = () => {
  return (<div>
    <Navbar button={
      <div>
          <CoolButton className="button is-info">Signup</CoolButton>
          <CoolButton className="button is-primary">Login</CoolButton>
      </div>
    }/>
    <Formfield label="name" type="text" placeholder="Raúl Marchán"/>
    <Formfield label="mail" type="email" placeholder="r.marchan@mail.com"/>
    <Formfield label="password" type="password" placeholder=""/>
    <CoolButton isSmall isInfo>Submit</CoolButton>
  </div>);
};

export default Signup;