import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class Signup extends React.Component {
    render () {
      return(
            <div>
            <Navbar />
            <FormField />
            <CoolButton />
            </div>
      )
    }
  } 


export default Signup;