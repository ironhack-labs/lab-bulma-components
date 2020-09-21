import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';
import "bulma/css/bulma.css";

  const Signup = () => {
      return (
        <div>
          <Navbar />
          <FormField label="Name" type="text" placeholder="your name" />
 	        <FormField label="Email" type="email" placeholder="your email" />
 	        <FormField label="Password" type="password" placeholder="*******" />
 	        <CoolButton buttonText="SUBMIT" />
 	    </div>
      );
  };

export default Signup