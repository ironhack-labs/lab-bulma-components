import React from "react";
import "bulma/css/bulma.css";
import FormField from "./../formfield/FormField";
import CoolButton from "./../coolbutton/CoolButton";

function SignUp() {
  return (   
    <section>
     <div className='form'>
        <FormField label="Name" type="text" placeholder="Another Name" />
     </div>
  
     <div className='form'>
        <FormField label="Enail" type="email" placeholder="Another Email" />
     </div>
  
     <div className='form'>
        <FormField label="Password" type="text" placeholder="Password" />
     </div>
      <div className='submit'>
       <CoolButton isLink >Submit</CoolButton>
       </div>
    </section>
  )
}


export default SignUp;
