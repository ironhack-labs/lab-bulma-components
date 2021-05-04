import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

const Signup = () => {
  return (
    <div>
      <Navbar />
    
      <div>
        <FormField 
          label={"Achternaam"} 
          type={"text"} 
          placeholder={"hier opschijven ..."}
        />
        <FormField 
          label={"Email"} 
          type={"email"} 
          placeholder={"jouw email hier ..."}
        />
        <FormField 
          label={"Password"} 
          type={"password"} 
          placeholder={"*******"}
        />
        <CoolButton isSuccess>Submit</CoolButton>
      </div>

    </div>
  );
};

export default Signup;