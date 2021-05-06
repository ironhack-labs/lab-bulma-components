import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar'
import FormField from '../formField/FormField';
import CoolButton from '../coolbutton/CoolButton';


const SignUp = (props) => {

    
    return(
    <div>

    <Navbar />

    <FormField 
        label={'Name'} 
        type={'text'} 
        placeholder={'e.g Mayhem Rodriguez'}/> 
    
    <FormField 
      label={'Email'} 
      type={'email'} 
      placeholder={'Mayhem@world.com'}/>
      
      <FormField 
      label={'Password'} 
      type={'Password'} 
      placeholder={'******'}/>

      <CoolButton isRed> Submit </CoolButton>
    </div>
    );


}
    
    export default SignUp;