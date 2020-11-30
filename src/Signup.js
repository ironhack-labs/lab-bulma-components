import React, {Fragment} from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar'
import  FormField from './formfield/FormField';
import CoolButton from './coolButton/CoolButton';



export default function Signup() {
  return (
    <Fragment>
        <div>
    	  <Navbar  />
    	</div>

        <FormField label="Name" type="name" placeholder="e.g Alex Smith" />
        <FormField label="E-mail" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="Insert your password" />
        <CoolButton className="button is-primary"  type="submit"  title="Submit" />

    </Fragment> 
  );
};

