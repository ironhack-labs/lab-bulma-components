import React from 'react';
import Navbar from '../navbar/Navbar';
import Formfield from '../formfield/Formfield';
import CoolButton from '../CoolButton';



const Signup = () => {
  return (<div>
    <Navbar button={
      <div>
        <Link to="/"><CoolButton isInfo>Signup</CoolButton></Link>
        <Link to="/signup"><CoolButton className="button is-primary">Login</CoolButton></Link>
      </div>
    }/>
    <Formfield label="name" type="text" placeholder="Raúl Marchán"/>
    <Formfield label="mail" type="email" placeholder="r.marchan@mail.com"/>
    <Formfield label="password" type="password" placeholder=""/>
    <CoolButton isSmall isInfo>Submit</CoolButton>
  </div>);
};

export default Signup;