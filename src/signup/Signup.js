import React from 'react'
import './Signup.css'
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButon from '../coolButton/CoolButton'
import 'bulma/css/bulma.css';

const Signup = () => {
    return (
      <div className='Signup'>
          <Navbar />
          <form>
            <FormField label="name" type="text" placeholder="your name"/>
            <FormField label="email" type="email" placeholder="example@gmail.com" />
            <FormField label="password" type="password" placeholder="your pass" />
            <CoolButon class="button my-class is-info" type="submit" value='Submit'/>
          </form>
      </div>
    );
};

export default Signup;