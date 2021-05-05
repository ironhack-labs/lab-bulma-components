import React from 'react';
import 'bulma/css/bulma.css';
import './SignUp.css';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

const SignUp = () => {
  return (
    <main>
      <Navbar/>
      <div>
        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="**********" />

          <CoolButton isSuccess className="is-rounded" name="Log in">Submit</CoolButton>

        </form>
      </div>
    </main>
    
  )
};


export default SignUp;

